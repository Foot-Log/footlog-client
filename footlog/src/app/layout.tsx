'use client';
import './globals.css';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import ReactQueryProviders from '@utils/ReactQueryProvider';
import useSetScreenSize from '@hooks/common/useSetScreenSize';

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useSetScreenSize();

  return (
    <html lang="en">
      <head>
        <title>FootLog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content={viewport} />
      </head>
      <body>
        <ReactQueryProviders>
          <RecoilRoot>
            <section className="h-full w-full">{children}</section>
          </RecoilRoot>
        </ReactQueryProviders>
        <Script
          type="text/javascript"
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
