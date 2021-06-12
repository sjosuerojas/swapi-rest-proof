const SwapiController = require('./controllers/Swapi.controller')
const VerifyAuth = require('../common/middlewares/verifyAuth')
const { checkSchema } = require('express-validator')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
    app.get('/api/swapi', [VerifyAuth.validAPIKey, SwapiController.index])

    app.get('/api/swapi/get-fastest-api/:id', [
        VerifyAuth.validAPIKey,
        SwapiController.getFastestShip,
    ])

    app.get('/api/swapi/get-planet-terrain/:id', [
        VerifyAuth.validAPIKey,
        SwapiController.getPlanetByTerrain,
    ])
}
