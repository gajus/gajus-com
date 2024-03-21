const { withSentryConfig } = require('@sentry/nextjs');
const { withContentlayer } = require('next-contentlayer');

// eslint-disable-next-line n/no-process-env
const { NODE_ENV } = process.env;

/** @type {import('next').NextConfig} */
let nextConfig = {
  eslint: {
    // We are already running checks using lint:eslint
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
  redirects: async () => {
    return [
      {
        destination: '/blog',
        permanent: true,
        source: '/',
      },
    ];
  },
  typescript: {
    // We are already running checks using lint:tsc
    ignoreBuildErrors: true,
  },
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

module.exports = withContentlayer(nextConfig);
