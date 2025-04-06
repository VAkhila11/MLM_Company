const mongoose = require('mongoose');

const userPackageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'expired', 'cancelled'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    },
    autoRenew: {
        type: Boolean,
        default: false
    },
    features: [{
        name: String,
        value: mongoose.Schema.Types.Mixed,
        used: {
            type: Number,
            default: 0
        },
        limit: Number
    }],
    commissionEarned: {
        type: Number,
        default: 0
    },
    lastCommissionDate: Date,
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
userPackageSchema.index({ user: 1 });
userPackageSchema.index({ package: 1 });
userPackageSchema.index({ status: 1 });
userPackageSchema.index({ startDate: 1 });
userPackageSchema.index({ endDate: 1 });

// Pre-save middleware to update timestamps
userPackageSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('UserPackage', userPackageSchema); 