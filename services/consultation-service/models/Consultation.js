const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
  medecin_id: String,
  patient_id: String,
  date: Date,
  statut: {
    type: String,
    default: 'Planifiée'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Consultation', ConsultationSchema);