const SwapiController = require('./controllers/Swapi.controller')
const { checkSchema } = require('express-validator')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
  app.get('/api/swapi', [SwapiController.index])  
  app.get('/api/swapi/get-fastest-api/:id', [SwapiController.getFastestShip])
  app.get('/api/swapi/get-planet-terrain/:id', [SwapiController.getPlanetByTerrain])
}
