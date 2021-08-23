'use strict';

const mongoose = require('mongoose');

const usersModel = new mongoose.Schema({
    username: String
});

module.exports = mongoose.model('users', usersModel, 'users');