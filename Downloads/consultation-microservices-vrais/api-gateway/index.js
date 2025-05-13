const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("api-gateway is running on port " + PORT);
});

app.listen(PORT, () => {
  console.log("api-gateway running on port " + PORT);
});
