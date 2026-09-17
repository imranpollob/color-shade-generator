/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/color-shade-generator',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

module.exports = nextConfig;
