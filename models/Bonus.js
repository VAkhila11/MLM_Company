const mongoose = require('mongoose');

const bonusSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: [
            'registration',
            'referral',
            'matching',
            'leadership',
            'rank',
            'special',
            'loyalty'
        ],
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['pending', 'credited', 'cancelled'],
        default: 'pending'
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'referenceModel'
    },
    referenceModel: {
        type: String,
        enum: ['Transaction', 'UserPackage', 'ReferralCode']
    },
    calculationDetails: {
        baseAmount: Number,
        percentage: Number,
        matchingPairs: Number,
        rank: String,
        level: Number
    },
    period: {
        startDate: Date,
        endDate: Date
    },
    conditions: {
        minReferrals: Number,
        minSales: Number,
        minTeamSize: Number,
        minRank: String,
        validFor: [String] // package names
    },
    creditedAt: Date,
    notes: String,
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
bonusSchema.index({ user: 1 });
bonusSchema.index({ type: 1 });
bonusSchema.index({ status: 1 });
bonusSchema.index({ 'period.startDate': 1 });
bonusSchema.index({ 'period.endDate': 1 });
bonusSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
bonusSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Bonus', bonusSchema); 