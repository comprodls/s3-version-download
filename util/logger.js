const { transports, createLogger, format } = require('winston');
const { getFormattedTime } = require('./date-format');

const logConfiguration = {
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
        filename: `logs/${ getFormattedTime() }.log`,
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