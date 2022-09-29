/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    // @TODO change or delete this
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
