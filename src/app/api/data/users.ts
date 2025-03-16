interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  permissions: string[];
}

export const FIXED_USER: User = {
  id: '123',
  name: 'Nazmul Hussain',
  email: 'admin@example.com',
  password: 'password123',
  role: 'admin',
  permissions: [
    'products:view',
    'dashboard:view',
    'roles:view',
    'orders:view',
    'customers:view',
    'settings:view',
  ],
};
