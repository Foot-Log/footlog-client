import NavBar from '@components/common/NavBar/NavBar';
import HomeHeader from '@components/home/HomeHeader';
import RecommendContainer from '@components/home/RecommendContainer';

export default function page() {
  return (
    <main className="relative flex h-full w-full flex-col">
      <NavBar />
      <HomeHeader />
      <RecommendContainer title="나를 위한 코스 추천" subtitle="선호도 기반으로 추천해드리는 코스들이에요" />
    </main>
  );
}
