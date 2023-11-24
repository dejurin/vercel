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
            value: "vercel-git-main-dejurin.vercel.app",
          },
        ],
      }],
    };
  },
};

export default nextConfig;
