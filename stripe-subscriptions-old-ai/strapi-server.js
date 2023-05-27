const { createControllerRoutes } = require('@strapi/strapi-utils');

module.exports = async (strapi) => {
  const routes = createControllerRoutes(strapi.config.middleware.settings.routes);

  // Load the Stripe Subscriptions routes
  const stripeSubscriptionsRoutes = require('./routes');

  // Register the routes
  routes.forEach((route) => {
    strapi.router.route(route);
  });

  // Register the Stripe Subscriptions routes
  stripeSubscriptionsRoutes.forEach((route) => {
    strapi.router.route(route);
  });
};
