'use strict';

const mongoose = require('mongoose');

const favoritesModel = new mongoose.Schema({
    id: { type: String, unique: true },
    user_id: String,
    favorites: [
        {
            character_id: { type: String }
        }
    ]
});

module.exports = mongoose.model('favorites', favoritesModel, 'favorites');