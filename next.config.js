/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.digistormhosting.com.au"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    urlImports: ['https://gist.githack.com/jordienr/'],
    appDir: true,
  },
}

module.exports = nextConfig
