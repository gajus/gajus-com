const { withSentryConfig } = require('@sentry/nextjs');

// eslint-disable-next-line node/no-process-env
const { NODE_ENV } = process.env;

/** @type {import('next').NextConfig} */
let nextConfig = {
  eslint: {
    // We are already running checks using lint:eslint
    ignoreDuringBuilds: true,
  },
  redirects: async () => {
    return [
      {
        destination: '/blog',
        permanent: true,
        source: '/',
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
  typescript: {
    // We are already running checks using lint:tsc
    ignoreBuildErrors: true,
  },
  output: 'standalone'
};


if (NODE_ENV === 'production') {
  nextConfig = withSentryConfig(
    nextConfig,
    {
      org: 'gajus-com',
      project: 'gajus-com',
      silent: true,
    },
    {
      disableLogger: true,
      hideSourceMaps: true,
      transpileClientSDK: true,
      tunnelRoute: '/monitoring',
      widenClientFileUpload: true,
    },
  );
}

module.exports = nextConfig;
