'use scrict'
const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    author:{
        type: String,
        required: [true, 'Author field is required'],
        unique: false
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports   = mongoose.model('book', bookSchema, 'books');