const UsersController = require('./controllers/Users.controller')
const VerifyAuth = require('../common/middlewares/verifyAuth')
const { checkSchema } = require('express-validator')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
    app.get('/api/users', [VerifyAuth.validAPIKey, UsersController.index])

    app.get('/api/users/get-all', [
        VerifyAuth.validAPIKey,
        UsersController.fetchAndOrder,
    ])

    app.get('/api/users/get-age/:id', [
        VerifyAuth.validAPIKey,
        UsersController.fetchAndFind,
    ])

    app.get('/api/users/get-repeated-letter', [
        VerifyAuth.validAPIKey,
        UsersController.fetchAndCount,
    ])
}
