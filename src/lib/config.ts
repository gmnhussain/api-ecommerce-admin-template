export const SERVER_ENV = process.env.SERVER_ENV || 'local';

export const SERVER =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api-ecommerce-admin.vercel.app';

// Extract hostname from SERVER
export const SERVER_HOSTNAME = new URL(SERVER).hostname; // localhost || api-ecommerce-admin.vercel.app

export const APP_NAME = 'API Ecommerce Admin';

export const API_BASE_URL = process.env.API_URL || `${SERVER}/api`;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
