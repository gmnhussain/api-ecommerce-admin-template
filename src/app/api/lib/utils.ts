import path from 'path';
import { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { SECRET_KEY } from '@/app/api/lib/config';

export function verifyToken(req: NextRequest): JwtPayload | null {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    // Ensure it's an object and contains role
    if (typeof decoded === 'object' && 'role' in decoded) {
      return decoded as JwtPayload; // Cast to JwtPayload
    }

    return null;
  } catch {
    return null;
  }
}

export const getDataFilePath = (file: string) =>
  path.join(process.cwd(), 'src', 'app', 'api', 'data', file);
