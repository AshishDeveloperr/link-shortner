const express = require('express');
const router = express.Router();
const { createLink, getLink } = require('../controllers/link.controller');

// POST /api/links - Create a short link
router.post('/', createLink);

// GET /api/links/:shortUrl - Redirect to original URL
router.get('/:shortUrl', getLink);

module.exports = router;