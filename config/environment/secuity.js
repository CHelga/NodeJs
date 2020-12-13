'use strict'

const helmet = require('helmet');

module.exports = {
    initHelmet: initHelmet
}
function initHelmet(app){
    //https://medium.com/@andy.neale/securing-node-web-applications-5d5f9bc21926
    //https://www.npmjs.com/package/helmet
    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
}