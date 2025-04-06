const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
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
    status: {
        type: String,
        enum: ['success', 'failure', 'error'],
        required: true
    },
    error: {
        message: String,
        stack: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexes
auditLogSchema.index({ user: 1 });
auditLogSchema.index({ admin: 1 });
auditLogSchema.index({ action: 1 });
auditLogSchema.index({ module: 1 });
auditLogSchema.index({ status: 1 });
auditLogSchema.index({ createdAt: -1 });

module.exports = mongoose.model('AuditLog', auditLogSchema); 