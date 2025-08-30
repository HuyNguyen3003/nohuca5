// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f1684.com",
        port: "", // để trống nếu không cần chỉ định
        pathname: "/**", // cho phép mọi đường dẫn ảnh trên example.com
      },
      {
        protocol: "https",
        hostname: "f168n.com",
        port: "", // nếu CDN sử dụng port khác
        pathname: "/**", // chỉ cho phép thư mục /images
      },
    ],
  },
  // experimental: {
  //   optimizePackageImports: ["lucide-react"],
  // },
  compress: true,
  poweredByHeader: false,
  headers: async () => {
    return [
      {
        source: "/(.*)\\.(png|jpg|jpeg|webp|avif|svg|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
