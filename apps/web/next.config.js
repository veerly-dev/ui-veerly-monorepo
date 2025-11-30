// apps/web/next.config.js
// @ts-check

const { composePlugins, withNx } = require('@nx/next');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/],
});

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  nx: {},
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = composePlugins(withNx, withPWA)(nextConfig);
