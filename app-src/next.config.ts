import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/psicologia',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
