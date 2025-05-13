const express = require('express');
const app = express();
const PORT = process.env.PORT || 4003;

app.get('/', (req, res) => {
  res.send("consultation-service is running on port " + PORT);
});

app.listen(PORT, () => {
  console.log("consultation-service running on port " + PORT);
});
