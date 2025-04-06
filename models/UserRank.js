const mongoose = require('mongoose');

const userRankSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rank: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rank',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'promoted', 'demoted'],
        default: 'active'
    },
    achievedAt: {
        type: Date,
        required: true
    },
    validUntil: Date,
    requirements: {
        directReferrals: {
            type: Number,
            required: true
        },
        teamSize: {
            type: Number,
            required: true
        },
        leftTeam: {
            type: Number,
            required: true
        },
        rightTeam: {
            type: Number,
            required: true
        },
        personalSales: {
            type: Number,
            required: true
        },
        teamSales: {
            type: Number,
            required: true
        }
    },
    benefits: {
        commissionRate: {
            type: Number,
            required: true
        },
        bonusAmount: {
            type: Number,
            required: true
        },
        features: [String]
    },
    promotion: {
        previousRank: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rank'
        },
        promotedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin'
        },
        promotionDate: Date,
        notes: String
    },
    demotion: {
        reason: String,
        demotedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin'
        },
        demotionDate: Date,
        notes: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes
userRankSchema.index({ user: 1 });
userRankSchema.index({ rank: 1 });
userRankSchema.index({ status: 1 });
userRankSchema.index({ achievedAt: -1 });
userRankSchema.index({ validUntil: 1 });

// Pre-save middleware to update timestamps
userRankSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('UserRank', userRankSchema); 