const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['super_admin', 'admin', 'support'],
        required: true
    },
    permissions: [{
        module: String,
        actions: [String]
    }],
    lastLogin: Date,
    loginHistory: [{
        ip: String,
        device: String,
        timestamp: Date
    }],
    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
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
adminSchema.index({ user: 1 });
adminSchema.index({ role: 1 });
adminSchema.index({ status: 1 });

// Pre-save middleware to update timestamps
adminSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Admin', adminSchema); 