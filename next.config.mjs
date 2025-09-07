/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    position: "bottom-right",
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      // Apex domain
      { protocol: "https", hostname: "jconet.co.uk", pathname: "/**" },
      // Any subdomain
      { protocol: "https", hostname: "*.jconet.co.uk", pathname: "/**" },
      // Additional sources
      { protocol: "https", hostname: "archive.org", pathname: "/**" },
      { protocol: "https", hostname: "cdn.discordapp.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
