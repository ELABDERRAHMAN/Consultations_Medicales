const mongoose = require('mongoose');

const MedecinSchema = new mongoose.Schema({
  nom: String,
  specialite: String,
  disponibilite: Boolean,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Medecin', MedecinSchema);