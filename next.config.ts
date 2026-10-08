import type { NextConfig } from "next";
import path from "node:path";
import consolidation from "./content/seo/consolidation-2026-10.json";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Old article URLs merged into one page per keyword cluster.
  async redirects() {
    const merged = Object.entries(consolidation.merge).flatMap(([keeper, slugs]) =>
      slugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/blog/${keeper}`,
        permanent: true,
      })),
    );
    const toPages = Object.entries(consolidation.to_page).flatMap(([page, slugs]) =>
      slugs.map((slug) => ({ source: `/blog/${slug}`, destination: page, permanent: true })),
    );
    return [...merged, ...toPages];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
