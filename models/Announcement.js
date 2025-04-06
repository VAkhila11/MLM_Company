const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['info', 'success', 'warning', 'error', 'maintenance'],
        default: 'info'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    target: {
        type: String,
        enum: ['all', 'users', 'admins', 'specific'],
        default: 'all'
    },
    specificUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'expired'],
        default: 'active'
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required: true
    },
    attachments: [{
        filename: String,
        path: String,
        size: Number,
        mimeType: String
    }],
    views: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        viewedAt: {
            type: Date,
            default: Date.now
        }
    }],
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
announcementSchema.index({ status: 1 });
announcementSchema.index({ type: 1 });
announcementSchema.index({ target: 1 });
announcementSchema.index({ startDate: 1 });
announcementSchema.index({ endDate: 1 });
announcementSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
announcementSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Announcement', announcementSchema); 