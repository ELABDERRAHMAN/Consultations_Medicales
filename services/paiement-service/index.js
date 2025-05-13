const express = require('express');
const app = express();
const PORT = 4004;

app.use(express.json());

app.post('/pay', (req, res) => {
  console.log("💳 Paiement reçu :", req.body);
  res.send("Paiement traité");
});

app.listen(PORT, () => {
  console.log(`💳 Paiement-Service en écoute sur le port ${PORT}`);
});