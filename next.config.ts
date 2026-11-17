import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Visa & Immigration pages were removed; send old links somewhere useful instead of a 404.
  async redirects() {
    return [
      { source: "/visa-immigration", destination: "/study-in-canada", permanent: true },
      { source: "/visa-immigration/:path*", destination: "/study-in-canada", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
