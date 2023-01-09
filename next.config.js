/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.digistormhosting.com.au", "i.pinimg.com"],
  },
  experimental: {
    appDir: true,
    urlImports: ['https://gist.githack.com/'],
  },
}

module.exports = nextConfig
