import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function checkPermission(requiredPermission: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const hasPermission = session.user.permissions.includes(requiredPermission);

  if (!hasPermission) {
    redirect('/access-denied');
  }

  return true;
}

export async function hasPermission(permission: string) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return false;
  }

  return session.user.permissions.includes(permission);
}
