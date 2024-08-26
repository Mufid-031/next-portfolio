/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  turbo: {
    enable: true,
  },

  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
