import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile ESM packages
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "prod.spline.design",
      },
    ],
  },

  // Exclude 3D libraries from server-side processing
  serverExternalPackages: [
    "three",
    "three-globe",
  ],

  // Optimize package imports for faster builds
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@radix-ui/react-slot",
    ],
  },

  // Turbopack configuration
  turbopack: {
    resolveAlias: {
      canvas: "./empty-module.js",
    },
    root: process.cwd(),
  },

  // Reduce memory usage
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
