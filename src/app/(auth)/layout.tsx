import type React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className="container relative h-screen min-h-screen grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background justify-center items-center">
      <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r bg-black">
        <div className="absolute bg-black inset-0" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <ShoppingBag className="mr-2 h-6 w-6" />
          E-Commerce Admin
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          {children}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
