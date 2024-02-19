const mongoose = require('mongoose');

const artefactSchema = new mongoose.Schema({
  priceInDollars: {
    type: Number,
    required: true
  },
  artisanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artisan',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  images: [String] // Array of image URLs
}, { timestamps: true });

module.exports = mongoose.model('Artefact', artefactSchema);
