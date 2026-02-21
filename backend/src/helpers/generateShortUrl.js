const crypto = require('crypto');
const Link = require('../models/link.models');

// Generate random short code
const generateShortCode = ()=> crypto.randomBytes(4).toString('hex');

// Generate url and check if short code already exists in db
const generateShortUrl = async () => {
    let shortUrl, exists = true;

    while(exists){
        shortUrl = generateShortCode();
        const found = await Link.findOne({shortUrl});
        exists = !!found;
    }

    return shortUrl;
}

module.exports = { generateShortCode, generateShortUrl };