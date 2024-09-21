'use client';
import { useEffect } from 'react';
import MainSearchHeader from '@components/common/MainSearchHeader/MainSearchHeader';
import RecommendContainer from '@components/home/RecommendContainer';
import RegionalRecommendContainer from '@components/home/RegionalRecommendContainer';
import useGetRecommend from '@hooks/home/useGetRecommend';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';
import useGetRegions from '@hooks/home/useGetRegions';

export default function page() {
  const { data: recommendCourses, refetch: refetchRecommend } = useGetRecommend();
  const { data: popularCourses, refetch: refetchPopular } = useGetPopularCourse();
  const { data: regions } = useGetRegions();

  useEffect(() => {
    refetchRecommend();
    refetchPopular();
  }, []);

  if (!recommendCourses?.data || !popularCourses?.data || !regions) {
    return <></>;
  }

  return (
    <main className="relative flex h-full w-full flex-col">
      <MainSearchHeader />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        <RecommendContainer
          title="나를 위한 코스 추천"
          subtitle="선호도 기반으로 추천해드리는 코스들이에요"
          courses={recommendCourses.data}
        />
        <RecommendContainer
          title="요즘 핫한 코스 추천"
          subtitle="최근 사용자들 사이에서 떠오르는 코스들이에요"
          courses={popularCourses.data}
        />
        <RegionalRecommendContainer regions={regions.data} />
      </section>
    </main>
  );
}
