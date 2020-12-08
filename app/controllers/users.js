'use strict'

const express = require('express');
const router = express.Router();
const User = require('../models/users');

module.exports = {
    getUsers: getUsers,
    createUser: createUser,
    getUserById: getUserById,
    deleteUser: deleteUser,
    responseToJSON: responseToJSON
};

function createUser(req, res, next) {
    const user = new User(req.body);
    user.save(function(err, result){
        console.log('test1');
        if(err){
            return res.json(err);
        }
        req.resourses.addUsers = result;
        return next();
    });
}

function getUsers(req, res, next){
    console.log('getUsers');
    User.find(function(err, result) {
        console.log('user.find');
        
        if(err){
            return res.json(err);
        }
        req.resourses.getAllUsers = result;
        return next();
    });
}

function getUserById(req, res, next){
    User.find({_id: '5fcf2ca51009e12a809560f0'}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.users = result;
        return next();
    });
}

function deleteUser(req, res, next){
    User.deleteOne({_id: '5fcf2ca51009e12a809560f0'}, function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.users = result;
        return next();
    });
}

function responseToJSON(prop) {
    console.log('prop', prop);

    return function(req, res, next) {
      return res.json(req.resourses[prop]);
    }
}

