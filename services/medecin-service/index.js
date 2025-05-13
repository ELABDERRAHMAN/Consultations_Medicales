const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Medecin = require('./models/Medecin');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/medecin_service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🩺 DB Médecins connectée');
}).catch((err) => {
  console.error('Erreur connexion MongoDB:', err);
});

app.post('/api/v1/medecin', async (req, res) => {
  try {
    const medecin = new Medecin(req.body);
    await medecin.save();
    res.status(201).json(medecin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/v1/medecin/:id', async (req, res) => {
  try {
    const medecin = await Medecin.findById(req.params.id);
    if (!medecin) return res.status(404).json({ message: 'Médecin introuvable' });
    res.json(medecin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/v1/medecin/:id', async (req, res) => {
  try {
    const medecin = await Medecin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(medecin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/v1/medecin/:id', async (req, res) => {
  try {
    await Medecin.findByIdAndDelete(req.params.id);
    res.json({ message: 'Médecin supprimé' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🩺 Médecin-Service en écoute sur le port ${PORT}`);
});