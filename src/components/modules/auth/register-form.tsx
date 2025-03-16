'use client';

import type React from 'react';

import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { AlertCircle } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

export function RegisterForm() {
  // const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError('');

    // try {
    //   // Call your API to register the user
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         name,
    //         email,
    //         password,
    //       }),
    //     }
    //   );

    //   const data = await response.json();

    //   if (!response.ok) {
    //     throw new Error(data.message || 'Failed to register');
    //   }

    //   // Redirect to login page after successful registration
    //   router.push('/login?registered=true');
    // } catch (error) {
    //   setError(error instanceof Error ? error.message : 'Registration failed');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          {/* {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )} */}
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer disabled:cursor-not-allowed"
            // disabled={isLoading}
          >
            {/* {isLoading ? 'Creating account...' : 'Create account'} */}
            Create account
          </Button>
        </div>
      </form>
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link
          href="/login"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
