'use client';
import './globals.css';
import { RecoilRoot } from 'recoil';

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>FootLog</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <RecoilRoot>
          <section className="h-full w-full">{children}</section>
        </RecoilRoot>
      </body>
    </html>
  );
}
