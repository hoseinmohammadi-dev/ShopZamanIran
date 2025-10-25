/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '68f3de25fd14a9fcc42a135a.mockapi.io',
        port: '',
        pathname: '/products/**',
      },
      {
        protocol: 'https',
        hostname: 'zamaniran.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
