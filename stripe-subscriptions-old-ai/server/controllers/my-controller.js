module.exports = {
  createPaymentIntent: async (ctx) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const { subscriptionId } = ctx.request.body;

    try {
      // Retrieve the subscription details from the database
      const subscription = await strapi.query('subscription').findOne({ id: subscriptionId });

      if (!subscription) {
        return ctx.throw(400, 'Subscription not found');
      }

      // Create a payment intent with the subscription price
      const paymentIntent = await stripe.paymentIntents.create({
        amount: subscription.price * 100, // Convert to cents
        currency: 'usd', // Change to your desired currency
        metadata: {
          subscriptionId: subscription.id,
        },
      });

      ctx.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      ctx.throw(500, 'Failed to create payment intent');
    }
  },
};
