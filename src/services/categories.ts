'use server';

import { sleep } from '@/lib/utils';
import { API_BASE_URL } from '@/lib/config';
import { getTokenFromSession } from '@/lib/session';

export async function getAllCategories({ page = 1, query = '' }) {
  await sleep(5000); // Simulate delay

  // Get session data
  const token = await getTokenFromSession();

  if (!token) {
    throw new Error('User is not authenticated');
  }

  const response = await fetch(
    `${API_BASE_URL}/categories?page=${page}&query=${encodeURIComponent(query)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Attach JWT token
      },
    }
  );

  const data = await response.json();

  // console.log('Response:', data);

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  // console.log(data);

  return data; // Returns { categories, pagination }
}
