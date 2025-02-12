import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   remotePatterns : [
      {
         protocol : 'https',
         hostname : 'di6ccwru5n10a.cloudfront.net',
      }      
   ]
  }
};

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  
});

export default bundleAnalyzerConfig(nextConfig);