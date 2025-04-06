const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        default: 0,
        min: 0
    },
    transactions: [{
        type: {
            type: String,
            enum: ['credit', 'debit'],
            required: true
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        reference: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'transactions.referenceModel'
        },
        referenceModel: {
            type: String,
            enum: ['Commission', 'Bonus', 'Payment', 'Withdrawal']
        },
        description: String,
        status: {
            type: String,
            enum: ['pending', 'completed', 'failed', 'cancelled'],
            default: 'pending'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    lastTransaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

// Indexes
walletSchema.index({ user: 1 });
walletSchema.index({ 'transactions.reference': 1 });
walletSchema.index({ 'transactions.status': 1 });
walletSchema.index({ 'transactions.createdAt': -1 });

// Pre-save middleware to update timestamp
walletSchema.pre('save', function(next) {
    this.lastUpdated = new Date();
    next();
});

module.exports = mongoose.model('Wallet', walletSchema); 