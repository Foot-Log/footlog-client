import NavBar from '@components/common/NavBar/NavBar';
import HomeHeader from '@components/home/HomeHeader';
import RecommendContainer from '@components/home/RecommendContainer';
import { recommendCoursesData } from '@core/recommendCoursesData';

export default function page() {
  return (
    <main className="relative flex h-full w-full flex-col">
      <NavBar />
      <HomeHeader />
      <section className="mt-[68px] flex flex-col">
        <RecommendContainer
          title="나를 위한 코스 추천"
          subtitle="선호도 기반으로 추천해드리는 코스들이에요"
          courses={recommendCoursesData}
        />
        <RecommendContainer
          title="요즘 핫한 코스 추천"
          subtitle="최근 사용자들 사이에서 떠오르는 코스들이에요"
          courses={recommendCoursesData}
        />
      </section>
    </main>
  );
}
