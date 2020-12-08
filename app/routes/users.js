'user strict'

const express = require('express');
const routes = require('../../config/routes');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.get('/users',
    userCtrl.getUsers,
    userCtrl.responseToJSON('getAllUsers'),
);

router.get('/usersById',
    userCtrl.getUserById,
    userCtrl.responseToJSON('users'),
);

router.post('/users',
    userCtrl.getUsers,
    userCtrl.createUser,
    userCtrl.responseToJSON('addUsers'),
);

router.delete('/users',
    userCtrl.deleteUser,
    userCtrl.responseToJSON('deletedUser'),
);

module.exports = router;