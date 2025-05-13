const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002;

app.get('/', (req, res) => {
  res.send("patient-service is running on port " + PORT);
});

app.listen(PORT, () => {
  console.log("patient-service running on port " + PORT);
});
