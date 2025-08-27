// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["f1684.com", "f168n.com"], // Thêm hostname bạn cần cho phép
    // Nếu bạn cần cấu hình pattern chi tiết hơn, có thể dùng remotePatterns như sau:
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "f1684.com",
    //     port: "",
    //     pathname: "/game_pictures/**",
    //   },
    // ],
  },
  /* các config khác của bạn */
};

export default nextConfig;
