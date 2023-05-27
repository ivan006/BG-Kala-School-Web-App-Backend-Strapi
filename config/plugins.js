module.exports = {
  'stripe-subscriptions': {
    enabled: true,
    resolve: './src/plugins/stripe-subscriptions' // path to plugin folder
  },
  settings: {
    autoOpen: true, // Allow unauthenticated access
  },
}
