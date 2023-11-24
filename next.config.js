/** @type {import('next').NextConfig} */
const nextConfig = {};

const locales = ["en", "es"];

const pages = locales.map((locale) => ({
  source: "/:path*",
  destination: `/${locale}/:path*`,
  has: [
    {
      type: "host",
      value: `${locale === "en" ? "" : locale + "."}${
        process.env.NEXT_PUBLIC_APP_HOST
      }`,
    },
  ],
}));

const afterFiles = [];

afterFiles.push(...pages);

module.exports = nextConfig;
