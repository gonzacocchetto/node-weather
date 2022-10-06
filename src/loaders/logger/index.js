const winston = require('winston');
const config = require('../../config');



const transports = [];
transports.push(
    new winston.transports.Console(),
);

const LoggerInstance = winston.createLogger({
    level: 'silly',
    format: winston.format.simple(),
    transports
});

module.exports = LoggerInstance;