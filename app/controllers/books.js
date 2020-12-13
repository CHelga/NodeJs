'use strict'

const express = require('express');
const router = express.Router();
const Book = require('../models/books');

module.exports = {
    getAllBooks: getAllBooks,
    getBooks: getBooks,
    createBook: createBook,
    getBookById: getBookById,
    deleteBookById: deleteBookById,
    responseToJSON: responseToJSON
};

function createBook(req, res, next) {
    const book = new Book(req.body);
    book.save(function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.addBooks = result;
        return next();
    });
}

function getAllBooks(req, res, next){
    Book.find(function(err, result) {       
        if(err){
            return res.json(err);
        }
        req.resourses.getBooks = result;
        return next();
    });
    
}

function getBookById(req, res, next){
    Book.find({_id: '5fcfb2f490ff1228accebab2'}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.books = result;
        return next();
    });
}

function deleteBookById(req, res, next){
    Book.deleteOne({_id: '5fcfb2fa90ff1228accebab3'}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.deletedBook = result;
        return next();
    });
}

function getBooks(req, res, next) {
    Book
    .find()
    .sort({author: 1})
    // .populate('user')  -- get all data -- 'user'= numele coloanei din mode.books
    .populate('user', 'email name, documents.name documents.docType details.age')
     .exec(function(err, result){
         if(err){
             return res.json(err);
         }
         req.resourses.getAllBooks = result;
         return next();
     });
 }
 

function responseToJSON(prop) {
    console.log('prop', prop);

    return function(req, res, next) {
      return res.json(req.resourses[prop]);
    }
}