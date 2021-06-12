const appRoot = require('app-root-path')
require('dotenv-flow').config()

module.exports = {
  app: {
    port: process.env.APP_PORT,
    enviroment: process.env.NODE_ENV,
    allowListDomains: process.env.APP_ALLOW_DOMAINS,
    apiUsers: process.env.API_EXTERNAL_URI,
    swapi: process.env.API_SWAPI_URI,
    apiKey: process.env.API_KEY
  },
  logger: {
    file: {
      level: process.env.APP_LOG_LEVEL,
      filename: `${appRoot}/${process.env.APP_LOG_FILENAME}`,
      handleExceptions: process.env.APP_LOG_HANDLEEXCEPTIONS,
      json: process.env.APP_LOG_JSON,
      maxsize: process.env.APP_LOG_MAXSIZE,
      maxFiles: process.env.APP_LOG_MAXFILES,
      colorize: process.env.APP_LOG_COLORIZE,
    },
    console: {
      level: process.env.APP_CONSOLE_LOG_LEVEL,
      handleExceptions: process.env.APP_CONSOLE_LOG_HANDLEEXCEPTIONS,
      json: process.env.APP_CONSOLE_LOG_JSON,
      colorize: process.env.APP_CONSOLE_LOG_COLORIZE,
    },
  },
}
