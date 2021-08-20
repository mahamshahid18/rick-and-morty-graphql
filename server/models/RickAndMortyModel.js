'use strict';

const mongoose = require('mongoose');

const rickAndMortyModel = new mongoose.Schema({
    id: { type: String },
    name: String,
    status: String,
    species: String,
    gender: String,
    image: String,
    location: {
        name: { type: String },
        type: { type: String },
        dimension: { type: String }
    },
    origin: {
        name: { type: String },
        type: { type: String },
        dimension: { type: String }
    },
    episode: [
        {
            name: { type: String },
            air_date: { type: String }
        }
    ]
});

module.exports = mongoose.model('rick-and-morty', rickAndMortyModel, 'apiData');