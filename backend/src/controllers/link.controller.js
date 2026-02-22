const Link = require('../models/link.models');
const { generateShortUrl } = require('../helpers/generateShortUrl');

// POST /api/links - create short url
const createLink = async (req, res) => {
    try{
        const {originalUrl} = req.body;

        if(!originalUrl){
            return res.status(400).json({error: 'originalUrl is required'});
        }

        const shortUrl = await generateShortUrl();

        const link = await Link.create({
            originalUrl,
            shortUrl
        });

        res.status(201).json({
            status: 'success',
            data: {
                originalUrl: link.originalUrl,
                shortUrl: link.shortUrl,
                openCount: link.openCount
            }

        });
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

// GET /api/links/:shortUrl - get original url based on shorturl
const getLink = async (req, res) => {
    try{
        const {shortUrl} = req.params;

        const link = await link.findOneAndUpdate(
            {shortUrl},
            {$inc: {openCount: 1}},
            {returnDocument: 'after'}
        );

        if(!link){
            return res.status(404).json({error: 'link not found'});
        }

        res.status(200).json({
            status: 'success',
            data:{
                originalUrl: link.originalUrl
            }
        })
    } catch(error){
        res.status(500).json({error: error.message});
    }
}

module.exports = { createLink, getLink };