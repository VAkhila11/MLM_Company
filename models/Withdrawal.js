const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
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
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'processed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['bank_transfer', 'upi'],
        required: true
    },
    paymentDetails: {
        bankName: String,
        accountNumber: String,
        ifscCode: String,
        upiId: String
    },
    adminNote: String,
    processedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    processedAt: Date,
    transactionId: String,
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
withdrawalSchema.index({ user: 1 });
withdrawalSchema.index({ status: 1 });
withdrawalSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
withdrawalSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema); 