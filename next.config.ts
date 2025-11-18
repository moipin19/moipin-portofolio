import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/moipin-portofolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
