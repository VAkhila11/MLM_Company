const mongoose = require('mongoose');

const networkSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    leftChild: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rightChild: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    level: {
        type: Number,
        default: 1
    },
    position: {
        type: String,
        enum: ['left', 'right'],
        required: true
    },
    directReferrals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    totalReferrals: {
        type: Number,
        default: 0
    },
    leftCount: {
        type: Number,
        default: 0
    },
    rightCount: {
        type: Number,
        default: 0
    },
    leftActive: {
        type: Number,
        default: 0
    },
    rightActive: {
        type: Number,
        default: 0
    },
    commissionEarned: {
        type: Number,
        default: 0
    },
    lastCommissionDate: Date,
    status: {
        type: String,
        enum: ['active', 'inactive', 'pending'],
        default: 'pending'
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
networkSchema.index({ user: 1 });
networkSchema.index({ parent: 1 });
networkSchema.index({ leftChild: 1 });
networkSchema.index({ rightChild: 1 });
networkSchema.index({ level: 1 });

// Pre-save middleware to update timestamps
networkSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Network', networkSchema); 