/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.jsdelivr.net",
      "ucarecdn.com",
      "goscoutmee.s3.af-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
