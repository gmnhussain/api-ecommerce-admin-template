import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NEXTAUTH_SECRET } from './config';
import { login } from '@/services/auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const data = await login(credentials.email, credentials.password);

          // Call your external API for authentication
          // const response = await fetch(`${API_BASE_URL}/auth/login`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   body: JSON.stringify({
          //     email: credentials.email,
          //     password: credentials.password,
          //   }),
          // });

          // if (!response.ok) {
          //   const errorData = await response.json();
          //   console.error('Login failed:', errorData);

          //   return null;
          // }

          // const data = await response.json();

          // console.log("Login Response:", response);
          // console.log("Login Data:", data);

          if (!data) {
            return null;
          }

          // Return the user object with token
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            permissions: data.user.permissions,
            accessToken: data.accessToken,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          id: user.id,
          accessToken: user.accessToken,
          role: user.role,
          permissions: user.permissions,
        };
      }

      // On subsequent calls, check if the token is still valid
      // You could implement token refresh logic here if needed
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        role: token.role as string,
        permissions: token.permissions as string[],
      };
      session.accessToken = token.accessToken as string;

      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: NEXTAUTH_SECRET,
};
