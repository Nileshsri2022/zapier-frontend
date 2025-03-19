/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint on development environment
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig