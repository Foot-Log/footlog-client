'use client';
import { useEffect } from 'react';
import './globals.css';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import ReactQueryProviders from '@utils/ReactQueryProvider';

export const viewport = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';

declare global {
  interface Window {
    Kakao: any;
  }
}

const initializeKakao = () => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY);
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 초기화 시점에 Kakao 객체가 존재하는지 확인
    if (window.Kakao) {
      initializeKakao();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>FootLog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content={viewport} />
        <link rel="preload" href="https://developers.kakao.com/sdk/js/kakao.js" as="script" />
        <link
          rel="preload"
          href={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`}
          as="script"
        />
      </head>
      <body>
        <ReactQueryProviders>
          <RecoilRoot>
            <section className="h-full w-full">{children}</section>
          </RecoilRoot>
        </ReactQueryProviders>
        <Script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          async
          onLoad={() => {
            if (window.Kakao) {
              initializeKakao();
            }
          }}
        />
        <Script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false&libraries=services`}
          async
          onLoad={() => {
            if (window.Kakao) {
              initializeKakao();
            }
          }}
        />
      </body>
    </html>
  );
}
