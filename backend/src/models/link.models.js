const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        trim: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    openCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;