import { sentryConfig } from './sentryConfig';
import { init } from '@sentry/nextjs';

init({
  ...sentryConfig,
  profilesSampleRate: 0.1,
});
