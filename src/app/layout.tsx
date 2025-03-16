import type { Metadata } from 'next';
import { SessionProvider } from '@/providers/session-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { geistSans, geistMono } from '@/lib/fonts';
import { Toaster } from '@/components/ui/sonner';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'E-commerce Admin',
  description: 'E-commerce Admin Panel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            <div className="font-[family-name:var(--font-geist-sans)]">
              {children}
            </div>

            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
