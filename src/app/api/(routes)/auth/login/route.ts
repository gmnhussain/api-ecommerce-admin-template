import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '@/app/api/lib/config';
import { FIXED_USER } from '@/app/api/data/users';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Check if credentials match
    if (email !== FIXED_USER.email || password !== FIXED_USER.password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      {
        id: FIXED_USER.id,
        email: FIXED_USER.email,
        role: FIXED_USER.role,
        permissions: FIXED_USER.permissions,
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Response with user data and token
    return NextResponse.json({
      user: {
        id: FIXED_USER.id,
        name: FIXED_USER.name,
        email: FIXED_USER.email,
        role: FIXED_USER.role,
        permissions: FIXED_USER.permissions,
      },
      accessToken,
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
