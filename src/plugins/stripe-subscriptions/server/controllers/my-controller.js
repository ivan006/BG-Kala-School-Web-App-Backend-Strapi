'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('stripe-subscriptions')
      .service('myService')
      .getWelcomeMessage();
  },
});
