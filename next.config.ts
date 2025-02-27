import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', '.ngrok.io', '.ngrok-free.app'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
