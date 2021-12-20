const { transports, createLogger, format } = require('winston');
const { getFormattedTime } = require('./date-format');
const { LogConfig } = require('../config.json');

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logConfiguration = {
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat 
  ),
  transports: [
    new transports.Console(),
    new transports.File({
        filename: `${LogConfig.logDir}/${ getFormattedTime() }.log`,
        maxsize: 1000
    })
  ]
};

const logger = createLogger(logConfiguration);

 function info(msg) {
   logger.log({
        message: msg,
        level: 'info'
    });
  }

  function error(msg) {
    logger.log({
      message: msg,
      level: 'error'
    });
  }

  module.exports = {
    error,
    info
  };