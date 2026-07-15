import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phcharter.org",
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
      },
      {
        protocol: "https",
        hostname: "phcse-reimagine.lovable.app",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/video-experience",
        destination: "/video-experience/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
