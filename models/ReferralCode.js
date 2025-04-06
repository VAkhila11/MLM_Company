const mongoose = require('mongoose');

const referralCodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'expired'],
        default: 'active'
    },
    usageCount: {
        type: Number,
        default: 0
    },
    maxUsage: {
        type: Number,
        default: null
    },
    expiryDate: Date,
    bonusAmount: {
        type: Number,
        default: 0
    },
    conditions: {
        minPurchase: Number,
        validFor: [String], // package names
        oneTimeUse: {
            type: Boolean,
            default: false
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
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
referralCodeSchema.index({ code: 1 });
referralCodeSchema.index({ user: 1 });
referralCodeSchema.index({ status: 1 });
referralCodeSchema.index({ expiryDate: 1 });
referralCodeSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
referralCodeSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('ReferralCode', referralCodeSchema); 