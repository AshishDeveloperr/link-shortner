const express = require('express');
const linkRoutes = require('./routes/link.routes');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/links', linkRoutes);

module.exports = app;