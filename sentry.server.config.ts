import { sentryConfig } from './sentryConfig';
import { init } from '@sentry/nextjs';
import { ProfilingIntegration } from '@sentry/profiling-node';

init({
  ...sentryConfig,
  integrations: [new ProfilingIntegration()],
  profilesSampleRate: 0.1,
});
