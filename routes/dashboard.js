const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User.findById(decoded.userId);
        
        if (!user) {
            throw new Error();
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Please authenticate' });
    }
};

// Get user dashboard data
router.get('/dashboard', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate('directReferrals', 'username email referralCode createdAt')
            .populate('referredBy', 'username email referralCode');

        // Calculate total referrals (direct and indirect)
        const getTotalReferrals = async (userId) => {
            const directReferrals = await User.find({ referredBy: userId });
            let total = directReferrals.length;
            
            for (const referral of directReferrals) {
                total += await getTotalReferrals(referral._id);
            }
            
            return total;
        };

        const totalReferrals = await getTotalReferrals(user._id);

        res.json({
            user: {
                username: user.username,
                email: user.email,
                referralCode: user.referralCode,
                level: user.level,
                earnings: user.earnings,
                directReferrals: user.directReferrals,
                referredBy: user.referredBy,
                totalReferrals
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get referral tree
router.get('/referral-tree', auth, async (req, res) => {
    try {
        const buildReferralTree = async (userId, depth = 0) => {
            if (depth > 5) return null; // Limit depth to prevent excessive queries
            
            const user = await User.findById(userId)
                .select('username email referralCode level earnings');
            
            if (!user) return null;
            
            const directReferrals = await User.find({ referredBy: userId })
                .select('username email referralCode level earnings');
            
            const tree = {
                user,
                referrals: []
            };
            
            for (const referral of directReferrals) {
                const subTree = await buildReferralTree(referral._id, depth + 1);
                if (subTree) {
                    tree.referrals.push(subTree);
                }
            }
            
            return tree;
        };

        const referralTree = await buildReferralTree(req.user._id);
        res.json(referralTree);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router; 