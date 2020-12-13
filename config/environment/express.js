'use strict'

const bodyParser = require('body-parser');
// const { initHelmet } = require('./secuity');
module.exports = {
    initExpress: initExpress,
    initHelmet: initHelmet
}

function initHelmet(app){
    app.use(helmet());
}

function initExpress(app){
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())

    app.use(function(req, res, next){
            req.resourses = req.resourses || {};
            // req.locals.isLoggedIn = !!req.user 
            next();
    });   
}