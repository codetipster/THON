const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  artefactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artefact',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true,
    default: 'USD'
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['GooglePay', 'CreditCard', 'PayPal', 'Other']
  },
  transactionId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  customerEmail: {
    type: String,
    required: true
  },
  // Additional fields for order fulfillment
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);