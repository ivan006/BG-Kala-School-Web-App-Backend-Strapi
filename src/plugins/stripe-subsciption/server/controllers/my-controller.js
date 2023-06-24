'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('stripe-subsciption')
      .service('myService')
      .getWelcomeMessage();
  },
});
