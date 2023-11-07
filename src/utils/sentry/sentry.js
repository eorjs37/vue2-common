import Vue from "vue";
import Router from 'vue-router';
Vue.use(Router);
import { router } from "@/router";
import * as Sentry from "@sentry/vue";

Sentry.init({
  Vue,
  dsn: "https://4e19c0ed6015438d56439a75ee579b44@o4506147661742080.ingest.sentry.io/4506186882154496",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
