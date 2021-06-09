const UsersController = require('./controllers/Users.controller')
const { checkSchema } = require('express-validator')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
  app.get('/api/users/get-all', [UsersController.fetchAndOrder])
  app.get('/api/user/get-age/:id', [UsersController.fetchAndFind])
  app.get('/api/users/get-repeated-letter', [UsersController.fetchAndCount])
}
