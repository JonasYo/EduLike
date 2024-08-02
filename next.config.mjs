import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';

import { env } from './env.mjs';

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: '/api/ping', destination: '/api/ping' },
      { source: '/api/disable-draft', destination: '/api/disable-draft' },
      { source: '/api/draft', destination: '/api/draft' },
      { source: '/api/revalidate', destination: '/api/revalidate' },
    ];
  },
  images: {
    domains: ['videos.ctfassets.net', 'images.ctfassets.net'],
    minimumCacheTTL: 31536000,
  },
});

export default config;
