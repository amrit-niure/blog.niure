const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        pathname: '**',
      },
      
    ],
  },
  reactStrictMode: true,
      swcMinify: true,
}

module.exports = withContentlayer(nextConfig);
