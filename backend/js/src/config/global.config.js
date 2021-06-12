// Global Variables
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const winston = require('../config/logger')
const { app: server } = require('../config/env.config')
const corsOptions = require('../config/cors.config')

/**
 *
 * @param {*} app
 * @description express instance
 */
exports.initConfig = function (app) {
  /**
   *
   * @description Set port for the whole application
   * @static port
   */
  app.set('onPort', server.port)
  /**
   *
   * @description Helmet for secure Header in application
   * @author helmet
   */
  app.use(helmet())
  /**
   *
   * @description Helmet for secure Header in application
   * @author cors
   */
  app.use(cors(corsOptions))
  /**
   *
   * @description Handles form-url endcoded is extended (n)mb +
   * @author express parser
   */
  app.use(express.urlencoded({ limit: '1mb', extended: true }))
  /**
   *
   * @description Handles json parser is extended (n)mb +
   * @author express parser
   */
  app.use(express.json({ limit: '1mb' }))
  /**
   *
   * @description For Dev purposes, logs every route entry
   * @author morgan
   */

  server.enviroment !== 'test' &&
    app.use(morgan('combined', { stream: winston.stream }))
}
