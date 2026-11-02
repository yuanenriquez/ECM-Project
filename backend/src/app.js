const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(authRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
    return res.status(400).json({ error: 'Request body must contain valid JSON.' });
  }

  console.error('Unhandled request error:', error);
  return res.status(500).json({ error: 'Internal server error.' });
});

module.exports = app;
