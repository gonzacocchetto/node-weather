const ExpresServer = require('./server/expressServer');
const config = require('../config');
const logger = require('./logger');

const startServer = async () =>{ //Con esta funcion traemos la clase de ExpressServer para levantar el servidor, la configuracion, los middlewares y la rutas

    const server = new ExpresServer();
    logger.info('Express Loaded');

    server.start();
    logger.info(`Server listening on port ${config.port}`);
}

module.exports = startServer;