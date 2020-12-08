'use strict'
const mongoose = require('mongoose');
const config = require('./index')

module.exports = {
    initMongoose: initMongoose
}

function initMongoose(){
    mongoose.connect(config.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

// const db = mongoose.connection;
//   db.on('error', function(param) {
//     console.log("error");
//     console.log(param);
//   });
  
//   db.once('open', function(param) {
//     console.log("connected");
//     console.log(param);
//   });
