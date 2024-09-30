'use client';
import MainSearchHeader from '@components/common/MainSearchHeader/MainSearchHeader';
import KakaoMap from '@components/log/KakaoMap';

export default function page() {
  return (
    <main className="h-full w-full">
      <MainSearchHeader />
      <KakaoMap />
    </main>
  );
}
