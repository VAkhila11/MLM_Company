const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            'account',
            'payment',
            'withdrawal',
            'commission',
            'technical',
            'other'
        ],
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['open', 'in_progress', 'resolved', 'closed'],
        default: 'open'
    },
    messages: [{
        sender: {
            type: String,
            enum: ['user', 'admin'],
            required: true
        },
        message: {
            type: String,
            required: true
        },
        attachments: [{
            filename: String,
            path: String,
            size: Number,
            mimeType: String
        }],
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    lastResponse: {
        type: Date,
        default: Date.now
    },
    resolution: {
        type: String
    },
    closedAt: Date,
    closedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
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
supportTicketSchema.index({ user: 1 });
supportTicketSchema.index({ status: 1 });
supportTicketSchema.index({ category: 1 });
supportTicketSchema.index({ priority: 1 });
supportTicketSchema.index({ assignedTo: 1 });
supportTicketSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
supportTicketSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('SupportTicket', supportTicketSchema); 