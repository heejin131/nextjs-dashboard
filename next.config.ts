import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // webpack(config, { isServer }) {
  //   if (!isServer) {
  //     // 클라이언트에서 bcrypt를 사용하지 않도록 설정
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       bcrypt: false,
  //     };
  //   }
  //   return config;
  // },
  experimental: {ppr: 'incremental'}
};

export default nextConfig;

