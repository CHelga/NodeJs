'use strict'

const express = require('express');
const app = express();
const config = require('./config/index');


require('./config/mongoose').initMongoose();
require('./config/environment/express').initExpress(app);
require('./config/routes').initRoutes(app);


app.listen(config.PORT, function() {
    console.log(`API on port ${config.PORT}`);   
});