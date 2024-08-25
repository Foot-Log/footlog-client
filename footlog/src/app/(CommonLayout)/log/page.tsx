'use client';
import MainSearchHeader from '@components/common/MainSearchHeader/MainSearchHeader';
import KakaoMap from '@components/log/KakaoMap';

export default function page() {
  return (
    <div>
      <MainSearchHeader />
      <KakaoMap locations={['서울', '대구']} />
    </div>
  );
}
