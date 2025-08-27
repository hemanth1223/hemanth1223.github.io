/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',          // for static export
  images: {
    unoptimized: true        // disables image optimization
  }
}

module.exports = nextConfig
