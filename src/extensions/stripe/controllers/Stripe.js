const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
  async checkout(ctx) {
    // Get the subscription ID from the request body
    const { subscriptionId } = ctx.request.body;

    try {
      // Retrieve the subscription from the database
      const subscription = await strapi
        .query("subscription")
        .findOne({ id: subscriptionId });

      // Make sure the subscription exists
      if (!subscription) {
        return ctx.throw(404, "Subscription not found");
      }

      // Create a new Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: subscription.name,
              },
              unit_amount: subscription.price * 100, // Stripe expects the amount in cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      });

      // Return the session ID to the client
      ctx.send({ sessionId: session.id });
    } catch (error) {
      console.error(error);
      ctx.throw(500, "An error occurred during checkout");
    }
  },

  async webhook(ctx) {
    // Handle Stripe webhook events here
    // Implement the logic to handle payment failures and unlinking users from privileged roles
    // Make sure to verify the Stripe webhook signature for security
  },
};
