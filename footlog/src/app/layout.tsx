import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'footlog',
  description: 'Korea plogging course recommendation service',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <section className="w-full h-full">{children}</section>
      </body>
    </html>
  );
}
