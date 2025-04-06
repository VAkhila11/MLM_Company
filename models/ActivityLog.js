const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    details: {
        type: mongoose.Schema.Types.Mixed
    },
    ip: String,
    userAgent: String,
    location: {
        country: String,
        region: String,
        city: String,
        latitude: Number,
        longitude: Number
    },
    device: {
        type: String,
        enum: ['desktop', 'mobile', 'tablet'],
        default: 'desktop'
    },
    browser: String,
    os: String,
    status: {
        type: String,
        enum: ['success', 'failure', 'error'],
        required: true
    },
    error: {
        message: String,
        stack: String
    },
    duration: {
        type: Number, // in milliseconds
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes
activityLogSchema.index({ user: 1 });
activityLogSchema.index({ action: 1 });
activityLogSchema.index({ module: 1 });
activityLogSchema.index({ status: 1 });
activityLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema); 