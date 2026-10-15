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
    // One canonical host: www and the vercel.app alias served duplicate copies of every page.
    const hosts = ["www.emeshalum.co.il", "emeshalum.vercel.app"].map((value) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value }],
      destination: "https://emeshalum.co.il/:path*",
      permanent: true,
    }));
    return [...hosts, ...merged, ...toPages];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
