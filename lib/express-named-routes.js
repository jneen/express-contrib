/*!
 * Express - Contrib - Named Routes
 * Copyright(c) 2010 Jay Adkisson <jay@causes.com>
 * MIT Licensed
 */

/**
 * Module dependencies
 */

var Route = require('named-routes').Route;
var utils = require('utils');

/**
 * Enable named routes. This hooks into the routing
 * functions and provides a `routes` object.
 *
 * @param {Express.Server} app
 * @param {String} home
 * @return {Express.Server} for chaining
 */

exports.enableRoutes = function(app, home) {
  app.viewHelpers.routes = {};


  /**
   * The named route function. Returns a route, and also adds itself
   * to the `routes` helper with the given name.
   *
   * @param {String} name for the route so we can put it in the helper
   * @param {String} method (one of 'get', 'post', 'put', 'del')
   * @param {String} template for the route
   * (All other params are passed through to app[method], including callback)
   * @return {Express.Server} for chaining
   */
  app.namedRoute = function(name, method, template) {
    this[method].apply(Array.prototype.slice(arguments, 2));

    var route = new Route(template, home);
    this.viewHelpers.routes[name] = route;
    return this;
  }
  return app;
}
