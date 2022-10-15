/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/basicauth_example/',
  basePath: process.env.GITHUB_ACTIONS && '/basicauth_example',
  trailingSlash: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" }
    }
  }
}

module.exports = nextConfig
