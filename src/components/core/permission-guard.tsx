'use client';

import type { ReactNode } from 'react';
import { useSession } from 'next-auth/react';

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function PermissionGuard({
  permission,
  children,
  fallback = null,
}: PermissionGuardProps) {
  const { data: session } = useSession();

  if (!session) {
    return fallback;
  }

  const hasPermission = session.user.permissions.includes(permission);

  return hasPermission ? <>{children}</> : <>{fallback}</>;
}
