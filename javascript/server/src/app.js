/** Config options */
const GlobalStatus = require('./utils/console')
const GlobalState = require('./config/global.config')
const express = require('express')

/** Config global router */
const Router = require('./routes')

const app = express()

// Set the global state of the configuration server
GlobalState.initConfig(app)
// Listen the port it was configured
app.listen(app.get('onPort'), () => GlobalStatus.verifyStatusServer(app))
// Set all routes server
Router.appRoutes(app)

module.exports = app