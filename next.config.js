/** @type {import('next').NextConfig} */
const nextConfig = {};

const locales = ["en", "es"];

const pages = locales.map((locale) => ({
  source: "/:path*",
  destination: `/${locale}/:path*`,
  has: [
    {
      type: "host",
      value: "vercel-git-main-dejurin.vercel.app",
    },
  ],
}));

const afterFiles = [];

afterFiles.push(...pages);

module.exports = nextConfig;
