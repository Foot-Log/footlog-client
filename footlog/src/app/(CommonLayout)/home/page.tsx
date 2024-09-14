'use client';
import { useRecoilValue } from 'recoil';
import MainSearchHeader from '@components/common/MainSearchHeader/MainSearchHeader';
import RecommendContainer from '@components/home/RecommendContainer';
import RegionalRecommendContainer from '@components/home/RegionalRecommendContainer';
import { courseState } from '@recoil/atom';

export default function page() {
  const courses = useRecoilValue(courseState); // Recoil 상태에서 코스 배열 가져오기
  console.log(courses);

  return (
    <main className="relative flex h-full w-full flex-col">
      <MainSearchHeader />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        <RecommendContainer
          title="나를 위한 코스 추천"
          subtitle="선호도 기반으로 추천해드리는 코스들이에요"
          courses={courses}
        />
        <RecommendContainer
          title="요즘 핫한 코스 추천"
          subtitle="최근 사용자들 사이에서 떠오르는 코스들이에요"
          courses={courses}
        />
        <RegionalRecommendContainer />
      </section>
    </main>
  );
}
