const mongoose = require('mongoose');

const rankSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        required: true,
        unique: true
    },
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
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    order: {
        type: Number,
        required: true
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
rankSchema.index({ name: 1 });
rankSchema.index({ level: 1 });
rankSchema.index({ status: 1 });
rankSchema.index({ order: 1 });

// Pre-save middleware to update timestamps
rankSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Rank', rankSchema); 