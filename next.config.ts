import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DOTBIN_URL: process.env.DOTBIN_URL,
  },
};

export default nextConfig;
