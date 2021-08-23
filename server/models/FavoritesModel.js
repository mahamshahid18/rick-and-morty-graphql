'use strict';

const mongoose = require('mongoose');

const favoritesModel = new mongoose.Schema({
    id: String,
    username: String
});

module.exports = mongoose.model('favorites', favoritesModel, 'favorites');