import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/psicologia',
  assetPrefix: '/psicologia',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
