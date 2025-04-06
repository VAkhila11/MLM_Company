const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: [
            'registration',
            'commission',
            'withdrawal',
            'kyc',
            'referral',
            'system',
            'bonus',
            'maintenance'
        ],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    data: {
        type: mongoose.Schema.Types.Mixed
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes
notificationSchema.index({ user: 1 });
notificationSchema.index({ type: 1 });
notificationSchema.index({ read: 1 });
notificationSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema); 