import type { NextConfig } from "next";

const renamedPaths = {
  "/about": "/tentang",
  "/services": "/layanan",
  "/team": "/tim",
  "/contacts": "/kontak",
  "/reservations": "/reservasi",
  "/privacy": "/privasi",
  "/terms": "/syarat-ketentuan",
} as const;

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      ...Object.entries(renamedPaths).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      { source: "/blog/page/:page", destination: "/blog?page=:page", permanent: true },
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
