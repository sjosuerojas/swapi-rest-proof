const winston = require('winston')
const { logger: loggerOptions } = require('../config/env.config')

const options = {
  file: loggerOptions.file,
  console: loggerOptions.console,
}

const logger = new winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
})

logger.stream = {
  write: function (message) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message)
  },
}

module.exports = logger
