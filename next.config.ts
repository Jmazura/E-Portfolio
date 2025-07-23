import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: [
      'avatars.githubusercontent.com', // GitHub avatars
      'img.itch.zone'                  // (optional) for itch.io images
    ],
  },
};

export default nextConfig;
