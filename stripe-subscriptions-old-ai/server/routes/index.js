module.exports = [
  {
    method: 'POST',
    path: '/create-payment-intent',
    handler: 'stripe-subscriptions.my-controller.createPaymentIntent',
    config: {
      policies: [], // Add any required policies here
    },
  },
];
