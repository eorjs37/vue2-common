import * as Sentry from '@sentry/vue'
const sentryObject = {
  captureException(err) {
    Sentry.captureException(err);

  },
  captureMessage(msg = '') {
    Sentry.captureMessage(msg)
  }
};

export { sentryObject }
