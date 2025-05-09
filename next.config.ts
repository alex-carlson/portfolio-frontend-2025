import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
