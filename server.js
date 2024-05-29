const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Load meta description data
const metaDescriptionData = require('./metadescription.json');

app.use(cors());

// Serve meta description data
app.get('/api/metaDescription', (req, res) => {
  res.json(metaDescriptionData);
});

// Endpoint for button click
app.get('/api/testBtn', (req, res) => {
  res.send('Hi this is the result of a button click!');
});

// Endpoint for page load
app.get('/api/test', (req, res) => {
  res.send('Hello from the local endpoint!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
