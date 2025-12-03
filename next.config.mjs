/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export", //remove for amplify deployment - using static export for S3 hosting
  reactCompiler: true,
  images: {
    unoptimized: true, //required for static export to avoid Image Optimization API errors - remove for amplify deployment
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nibm-icacit-web.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
