const express = require('express');
const app = express();
const PORT = 4003;

app.use(express.json());

app.post('/notify', (req, res) => {
  console.log("📨 Notification reçue :", req.body);
  res.send("Notification envoyée");
});

app.listen(PORT, () => {
  console.log(`📨 Notification-Service en écoute sur le port ${PORT}`);
});