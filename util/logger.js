const { transports, createLogger, format } = require('winston');
const moment = require('moment');

const { LogConfig } = require('../config.json');

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logFileName = moment().format('YYYY-MM-DD HH-mm-ss'); 
console.log(logFileName)

const logConfiguration = {
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat 
      )
    }),
    new transports.File({
        filename: `${LogConfig.logDir}/${logFileName}.log`
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