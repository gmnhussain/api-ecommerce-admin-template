'use client';

import type React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navItems } from '@/data/menu-items';

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const { data: session } = useSession();

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // const filteredNavItems = navItems.filter((item) =>
  //   session?.user.permissions.includes(item.permission)
  // );

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-background border-b p-4 flex justify-between items-center">
        <Link href="/dashboard" className="font-bold text-xl flex items-center">
          <ShoppingBag className="mr-2 h-6 w-6" />
          E-Commerce
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-20 transform md:translate-x-0 transition-transform duration-200 ease-in-out',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full',
          'md:relative md:w-64 bg-background border-r h-full'
        )}
      >
        <div className="p-6 hidden md:flex items-center">
          <Link
            href="/dashboard"
            className="font-bold text-xl flex items-center"
          >
            <ShoppingBag className="mr-2 h-6 w-6" />
            E-Commerce
          </Link>
        </div>

        <ScrollArea className="h-[100vh] md:h-[calc(100vh-76px)]">
          <div className="px-4 py-16 mt-0 md:pt-5">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="px-4 pb-3 pt-1 text-sm font-medium text-muted-foreground opacity-60">
                    {item.label}
                  </div>
                  {item.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center px-4 py-3 text-sm font-medium rounded-md',
                        pathname === item.href
                          ? // ? 'bg-primary text-primary-foreground'
                            'bg-secondary text-secondary-foreground'
                          : 'text-muted-foreground hover:bg-muted'
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="ml-3">{item.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
