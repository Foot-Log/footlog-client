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
        <meta property="og:title" content="FootLog" />
        <meta property="og:description" content="건강한 발걸음을 위한 국내 플로깅 코스 추천 및 기록 서비스" />
        <meta property="og:image" content="https://footlog-bucket.s3.ap-northeast-2.amazonaws.com/9b660251-6Logo.png" />
        <meta property="og:url" content="https://footlog.site" />
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
