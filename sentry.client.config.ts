import { sentryConfig } from './sentryConfig';
import { init } from '@sentry/nextjs';

init({
  ...sentryConfig,
});
