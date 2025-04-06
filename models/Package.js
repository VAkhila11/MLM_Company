const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0
    },
    currency: {
        type: String,
        default: 'INR'
    },
    features: [{
        name: String,
        description: String,
        value: mongoose.Schema.Types.Mixed
    }],
    commissionRates: {
        direct: {
            type: Number,
            required: true,
            default: 0
        },
        indirect: [{
            level: Number,
            percentage: Number
        }],
        matching: {
            type: Number,
            required: true,
            default: 0
        }
    },
    validity: {
        type: Number, // in days
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    order: {
        type: Number,
        required: true
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
packageSchema.index({ name: 1 });
packageSchema.index({ status: 1 });
packageSchema.index({ order: 1 });

// Pre-save middleware to update timestamps
packageSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Package', packageSchema); 