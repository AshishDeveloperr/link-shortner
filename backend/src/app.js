const express = require('express');
const linkRoutes = require('./routes/link.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/links', linkRoutes);

module.exports = app;