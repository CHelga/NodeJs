'use strict'

const express = require('express');
const app = express();
const config = require('./config/index');

require('./config/environment/secuity').initHelmet(app);
require('./config/mongoose').initMongoose();
require('./config/environment/express').initExpress(app);
require('./config/routes').initRoutes(app);

app.use(function(err, req, res, next){
    console.log('middleware error', err);
    res.status(err && err.statusCode || 400).json({
        status: 'error',
        message: err && err.message || "Default message"
    })
});

app.all('*', function(req, res, next){
    console.log('final router if not exist');
    return res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.url} on this server`
    });
});

app.listen(config.PORT, function() {
    console.log(`API on port ${config.PORT}`);   
});