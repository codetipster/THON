const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL to the image
    required: true
  },
  about: {
    type: String,
    required: true
  },
  artefacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artefact'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Artisan', artisanSchema);
