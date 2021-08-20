'use strict';

const mongoose = require('mongoose');

const connectToDb = async () => {
    const connection = await mongoose.connect(
        `mongodb://localhost:27017/rick-and-morty`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    return connection;
}

module.exports = connectToDb;