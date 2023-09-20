/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'cdn.sanity.io',
      'placehold.co'
    ],
  },
}

module.exports = nextConfig
