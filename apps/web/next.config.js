// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public', // Service worker and related files output here
  disable: process.env.NODE_ENV !== 'production', // Disable PWA in dev
  register: true,
  skipWaiting: true,
});

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensures App Router support
  },
  nx: {
    svgr: false, // Optional Nx setting (disable SVG transform)
  },
};

const plugins = [
  // Compose plugins here, order matters.
  withNx,
  withPWA,
];

module.exports = composePlugins(...plugins)(nextConfig);
