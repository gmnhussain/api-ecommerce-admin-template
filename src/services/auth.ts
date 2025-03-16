'use server';

import { API_BASE_URL } from '@/lib/config';

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();

  return data;
}

// export async function logout() {
//   const response = await fetch(`${API_BASE_URL}/auth/logout`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Logout failed');
//   }
// }

// export async function register(email: string, password: string) {
//   const response = await fetch(`${API_BASE_URL}/auth/register`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     throw new Error('Registration failed');
//   }

//   const data = await response.json();

//   return data;
// }

// export async function resetPassword(email: string) {
//   const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email }),
//   });

//   if (!response.ok) {
//     throw new Error('Password reset failed');
//   }
// }

// export async function updatePassword(password: string) {
//   const response = await fetch(`${API_BASE_URL}/auth/update-password`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ password }),
//   });

//   if (!response.ok) {
//     throw new Error('Password update failed');
//   }
// }
