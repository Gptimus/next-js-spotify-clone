/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wzsenqpxonekjyjbidxc.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
