import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', '.ngrok.io', '.ngrok-free.app'],
  },
};

export default nextConfig;
