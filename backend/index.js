const express = require('express');
const app = express();
const PORT = 5000; // We'll use port 5000 for backend

app.get('/', (req, res) => {
  res.send('Hello from Roadmap AI backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});