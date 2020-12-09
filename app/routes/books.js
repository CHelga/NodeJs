'user strict'

const express = require('express');
const routes = require('../../config/routes');
const router = express.Router();

const userCtrl = require('../controllers/books');

router.get('/books/allBooks',
    userCtrl.getAllBooks,
    userCtrl.responseToJSON('getBooks'),
);

router.get('/books',
    userCtrl.getBooks,
    userCtrl.responseToJSON('getAllBooks'),
);

router.get('/bookById',
    userCtrl.getBookById,
    userCtrl.responseToJSON('books'),
);

router.post('/books',
    userCtrl.getBooks,
    userCtrl.createBook,
    userCtrl.responseToJSON('addBooks'),
);

router.delete('/books',
    userCtrl.deleteBookById,
    userCtrl.responseToJSON('deletedBook'),
);

module.exports = router;