exports.appRoutes = function (app) {
  /**
   * @name welcome-routes
   * @description Welcome route created for testing purposes
   * @param {app} express
   */
  require('../app/common/routes.config').routesConfig(app)
}
