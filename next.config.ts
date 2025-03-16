import type { NextConfig } from 'next';
import { SERVER_ENV, SERVER_HOSTNAME } from '@/lib/config';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Common patterns for both local and live
      // CDN
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      // Specific configurations for local or live environment
      ...(SERVER_ENV === 'local'
        ? [
            {
              protocol: 'http' as const,
              hostname: SERVER_HOSTNAME,
              pathname: '**',
            },
            // additional patterns
            {
              protocol: 'http' as const,
              hostname: '10.10.20.45',
              pathname: '**',
            },
          ]
        : [
            {
              protocol: 'https' as const,
              hostname: SERVER_HOSTNAME,
              pathname: '**',
            },
          ]),
    ],
  },
};

export default nextConfig;
