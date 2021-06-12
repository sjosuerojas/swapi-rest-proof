exports.appRoutes = function (app) {
   /**
   * @name users-routes
   * @description Welcome route created for testing purposes
   * @param {app} express
   */
    require('../app/swapi/routes.config').routesConfig(app)
  /**
   * @name users-routes
   * @description Welcome route created for testing purposes
   * @param {app} express
   */
  require('../app/users/routes.config').routesConfig(app)
  /**
   * @name welcome-routes
   * @description Welcome route created for testing purposes
   * @param {app} express
   */
  require('../app/common/routes.config').routesConfig(app)
}
