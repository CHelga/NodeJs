'use strict'

const ENV = process.env.NODE_ENV || 'development';
const config = require(`./environment/development`);

module.exports = config;