const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
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
    currency: {
        type: String,
        default: 'INR'
    },
    type: {
        type: String,
        enum: ['registration', 'package', 'topup', 'withdrawal'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['upi', 'bank_transfer', 'wallet', 'card'],
        required: true
    },
    paymentDetails: {
        transactionId: String,
        paymentGateway: String,
        paymentDate: Date,
        upiId: String,
        bankName: String,
        accountNumber: String,
        ifscCode: String,
        cardLast4: String,
        cardType: String
    },
    reference: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'referenceModel'
    },
    referenceModel: {
        type: String,
        enum: ['Transaction', 'Withdrawal']
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed
    },
    error: {
        code: String,
        message: String,
        details: mongoose.Schema.Types.Mixed
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
paymentSchema.index({ user: 1 });
paymentSchema.index({ status: 1 });
paymentSchema.index({ type: 1 });
paymentSchema.index({ 'paymentDetails.transactionId': 1 });
paymentSchema.index({ createdAt: -1 });

// Pre-save middleware to update timestamps
paymentSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Payment', paymentSchema); 