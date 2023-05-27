const Stripe = require('stripe');
const { findSubscriptionById, updateOrderStatus } = require('./my-service');

module.exports = async (ctx, next) => {
  if (ctx.request.url.includes('/stripe-webhook')) {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const payload = ctx.request.body;

    try {
      // Verify the webhook event
      const event = stripe.webhooks.constructEvent(
        ctx.request.rawBody,
        ctx.request.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET
      );

      // Handle specific webhook event types
      switch (event.type) {
        case 'payment_intent.succeeded':
          // Get the subscription ID from the payment intent
          const subscriptionId = event.data.object.metadata.subscriptionId;

          // Find the subscription in the database
          const subscription = await findSubscriptionById(subscriptionId);

          if (subscription) {
            // Assign the role permission to the user
            await updateOrderStatus(subscription.order, 'paid');

            // Add code to link the user to the correct role based on the subscription
            // Here, you can use the subscription's permission field to determine the role

            ctx.send('Webhook handled successfully');
          } else {
            ctx.send('Subscription not found');
          }
          break;
        case 'payment_intent.payment_failed':
          // Get the subscription ID from the payment intent
          const failedSubscriptionId = event.data.object.metadata.subscriptionId;

          // Find the subscription in the database
          const failedSubscription = await findSubscriptionById(failedSubscriptionId);

          if (failedSubscription) {
            // Remove the role permission from the user
            await updateOrderStatus(failedSubscription.order, 'failed');

            // Add code to unlink the user from the privileged role

            ctx.send('Webhook handled successfully');
          } else {
            ctx.send('Subscription not found');
          }
          break;
        default:
          ctx.send('Unhandled webhook event');
          break;
      }
    } catch (error) {
      ctx.send('Webhook error', 400);
    }
  } else {
    await next();
  }
};
