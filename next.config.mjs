/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return {
      afterFiles: [{
        source: "/:path*",
        destination: `/en/:path*`,
        has: [
          {
            type: "host",
            value: process.env.NEXT_PUBLIC_APP_HOST,
          },
        ],
      }],
    };
  },
};

export default nextConfig;
