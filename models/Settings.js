const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    registrationFee: {
        type: Number,
        required: true,
        default: 0
    },
    commissionRates: {
        direct: {
            type: Number,
            required: true,
            default: 0
        },
        indirect: [{
            level: Number,
            percentage: Number
        }],
        matching: {
            type: Number,
            required: true,
            default: 0
        },
        leadership: [{
            level: Number,
            percentage: Number
        }]
    },
    matchingBonus: {
        pairValue: {
            type: Number,
            required: true,
            default: 0
        },
        maxPairsPerDay: {
            type: Number,
            required: true,
            default: 0
        }
    },
    withdrawal: {
        minAmount: {
            type: Number,
            required: true,
            default: 0
        },
        maxAmount: {
            type: Number,
            required: true,
            default: 0
        },
        processingFee: {
            type: Number,
            required: true,
            default: 0
        }
    },
    kyc: {
        required: {
            type: Boolean,
            default: false
        },
        documents: [String]
    },
    maintenance: {
        enabled: {
            type: Boolean,
            default: false
        },
        message: String,
        startTime: Date,
        endTime: Date
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

// Indexes
settingsSchema.index({ lastUpdated: -1 });

// Pre-save middleware to update timestamp
settingsSchema.pre('save', function(next) {
    this.lastUpdated = new Date();
    next();
});

module.exports = mongoose.model('Settings', settingsSchema); 