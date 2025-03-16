'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function getTokenFromSession() {
  const session = await getServerSession(authOptions);
  return session?.accessToken; // Get JWT token
}
