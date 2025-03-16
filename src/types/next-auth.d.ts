import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
    user: {
      id: string;
      role: string;
      permissions: string[];
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    accessToken: string;
    role: string;
    permissions: string[];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    accessToken: string;
    role: string;
    permissions: string[];
  }
}
