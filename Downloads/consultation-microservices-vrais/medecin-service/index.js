const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send("medecin-service is running on port " + PORT);
});

app.listen(PORT, () => {
  console.log("medecin-service running on port " + PORT);
});
