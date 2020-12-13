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
    const addUser = req.body;
    addUser.details = JSON.parse(addUser.details);
    addUser.documents = JSON.parse(addUser.documents);
    const user = new User(req.body);
    user.save(function(err, result){
        if(err){
            return res.json(err);
        }
        req.resourses.addUsers = result;
        return next();
    });
}

function getUsers(req, res, next){
    console.log('getUsers');
    console.log('params', req.query);
    User.find({"details.role": req.query.role}, function(err, result) {        
        if(err){
            err.statusCode = 400;
            return next(err);
        }
        req.resourses.getAllUsers = result;
        return next();
    });
}

function getUserById(req, res, next){
    //req.params {} -- este cu /users/5fcfae6367f9b516e06b89c0
    //req.query {} -- este cu /users/5fcfae6367f9b516e06b89c0?emai="tets"
    console.log('params by id', req.params);
    console.log('params by id', req.query);
    User.find({_id: req.params.userId}, function(err, result){
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
    // return res.status(201).json(req.resourses[prop]);
    }
}

