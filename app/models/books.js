'use scrict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    author:{
        type: String,
        required: true,
        unique: false
    }
});

module.exports   = mongoose.model('book', bookSchema, 'books');