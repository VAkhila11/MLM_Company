const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    profile: {
        firstName: String,
        lastName: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        country: String,
        zipCode: String,
        profilePicture: String
    },
    mlmDetails: {
        referralCode: {
            type: String,
            unique: true,
            required: true
        },
        referredBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        level: {
            type: Number,
            default: 1
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'pending'],
            default: 'pending'
        },
        position: {
            type: String,
            enum: ['left', 'right'],
            default: 'left'
        },
        directReferrals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        totalEarnings: {
            type: Number,
            default: 0
        },
        availableBalance: {
            type: Number,
            default: 0
        },
        totalWithdrawn: {
            type: Number,
            default: 0
        }
    },
    paymentDetails: {
        bankName: String,
        accountNumber: String,
        ifscCode: String,
        upiId: String
    },
    kyc: {
        aadharNumber: String,
        panNumber: String,
        aadharFront: String,
        aadharBack: String,
        panCard: String,
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date
    }
});

// Indexes
userSchema.index({ 'mlmDetails.referralCode': 1 });
userSchema.index({ 'mlmDetails.referredBy': 1 });
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

module.exports = mongoose.model('User', userSchema); 