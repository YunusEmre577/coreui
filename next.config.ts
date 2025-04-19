import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2"
const nextConfig: NextConfig = {
  swcMinify:false,
redirects: async() => {
  return [
    {
      source: "/docs",
      destination: "/docs/getting-started/introduction",
      permanent:true
    },
    {
      source: "/docs/components",
      destination: "/docs/components/avatar",
      permanent:true
    },
    {
      source: "/components",
      destination: "/docs/components/avatar",
      permanent:true
    }
  ]
},
eslint: {
  ignoreDuringBuilds: true,
}
};

export default withContentlayer(nextConfig);
