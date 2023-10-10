import { type BrowserOptions } from '@sentry/nextjs';

export const sentryConfig: BrowserOptions = {
  autoSessionTracking: false,
  debug: false,
  dsn: 'https://bbbb86f02ad66622c4c45e00c08c367a@o4506023164641280.ingest.sentry.io/4506023166279680',
  enableTracing: true,
  tracesSampleRate: 0.1,
};
