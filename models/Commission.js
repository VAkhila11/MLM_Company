const mongoose = require('mongoose');

const commissionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    type: {
        type: String,
        enum: ['direct', 'indirect', 'matching', 'leadership', 'bonus'],
        required: true
    },
    level: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'credited', 'cancelled'],
        default: 'pending'
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true
    },
    relatedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    calculationDetails: {
        baseAmount: Number,
        percentage: Number,
        matchingPairs: Number,
        leftCount: Number,
        rightCount: Number
    },
    creditedAt: Date,
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
commissionSchema.index({ user: 1 });
commissionSchema.index({ type: 1 });
commissionSchema.index({ status: 1 });
commissionSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
commissionSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Commission', commissionSchema); 