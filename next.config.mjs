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
    GRAPHCMS_PROJECT_API: process.env.GRAPHCMS_PROJECT_API,
    GRAPHCMS_PROD_AUTH_TOKEN: process.env.GRAPHCMS_PROD_AUTH_TOKEN,
    GRAPHCMS_DEV_AUTH_TOKEN: process.env.GRAPHCMS_DEV_AUTH_TOKEN,
    GRAPHCMS_PREVIEW_SECRET: process.env.GRAPHCMS_PREVIEW_SECRET,
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [
      { source: '/api/ping', destination: '/api/ping' },
      { source: '/api/webhook/content', destination: '/api/webhook/content' },
      { source: '/api/content', destination: '/api/content' },
    ];
  },
  images: {
    domains: ['media.graphassets.com', 'images.ctfassets.net'],
  },
});

export default config;
