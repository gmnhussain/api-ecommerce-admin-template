'use client';

import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function Error() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <PlusCircle className="h-10 w-10 text-muted-foreground" />
        </div>
        {/* <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <h2 className="text-xl font-semibold mt-2">Page Not Found</h2>
        <p className="mt-4 mb-8 text-muted-foreground">
          We couldn&apos;t find the page you were looking for. The page might
          have been removed, renamed, or is temporarily unavailable.
        </p> */}
        <p className="mt-4 mb-8 text-muted-foreground">
          Something went wrong to products!
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <a href="/products">Reload</a>
          </Button>
          {/* <Button asChild>
            <Link href="/">Return Home</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
