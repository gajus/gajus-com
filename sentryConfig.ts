import { type BrowserOptions } from '@sentry/nextjs';

export const sentryConfig: BrowserOptions = {
  autoSessionTracking: false,
  debug: false,
  dsn: 'https://c2f789c86370136499e06e63d06fe203@o478395.ingest.sentry.io/4506027955716096',
  enableTracing: true,
  tracesSampleRate: 0.1,
};
