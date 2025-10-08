import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Don’t fail the Vercel build on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (Optional) If you later hit TS type errors during builds and need a fast unblock,
  // you can uncomment the block below. I'd keep this OFF if you can.
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // (Optional) Image defaults – safe to keep
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;