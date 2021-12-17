const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 's3Download'});

 function info(msg) {
    log.info(msg);
  }

  function error(msg) {
    log.error(msg);
  }

  module.exports = {
    error,
    info
  };