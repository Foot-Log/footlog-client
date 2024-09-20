'use client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MainSearchHeader from '@components/common/MainSearchHeader/MainSearchHeader';
import RecommendContainer from '@components/home/RecommendContainer';
import RegionalRecommendContainer from '@components/home/RegionalRecommendContainer';
import { courseState } from '@recoil/atom';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';
import useGetRegions from '@hooks/home/useGetRegions';

export default function page() {
  const [courses, setCourses] = useRecoilState(courseState); // Recoil 상태에서 코스 배열 가져오기
  const { data: popularCourses } = useGetPopularCourse();
  const { data: regions } = useGetRegions();

  useEffect(() => {
    // 로컬 스토리지에서 코스 배열 가져오기
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses)); // Recoil 상태에 저장
    }
  }, [setCourses]);

  if (!popularCourses?.data || !regions) {
    return <></>;
  }

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
          courses={popularCourses.data}
        />
        <RegionalRecommendContainer regions={regions.data} />
      </section>
    </main>
  );
}
