'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import { CityRegionsDtoDataTypes } from 'types/home/search/SearchTypes';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetCityRegions from '@hooks/home/search/useGetCityRegions';
import useGetCityCourse from '@hooks/home/list/useGetCityCourse';
import { useInfiniteScroll } from '@hooks/common/useInfiniteScroll';
import { MoonLoader } from 'react-spinners';

export default function Page() {
  const pathname = usePathname();
  const area_id = pathname.split('/').pop();

  const { data: regions } = useGetCityRegions();
  const [area_name, setAreaName] = useState<string>('');
  const [courses, setCourses] = useState<CourseResponseDtoDataTypes[]>([]);
  const areaIdNumber = area_id ? Number(area_id) : 0;

  // sigunguId에 맞는 sigunguName 찾기
  useEffect(() => {
    if (regions?.data) {
      const foundRegion = regions.data.find((region: CityRegionsDtoDataTypes) => region.sigunguId === areaIdNumber);
      if (foundRegion) {
        setAreaName(foundRegion.sigunguName);
      } else {
        setAreaName('전체');
      }
    }
  }, [regions, areaIdNumber]);

  const { data: fetchedCourses } = useGetCityCourse(areaIdNumber);

  useEffect(() => {
    if (fetchedCourses?.data) {
      setCourses(fetchedCourses.data);
    }
  }, [fetchedCourses]);

  // 무한 스크롤 훅 사용
  const { visibleCount } = useInfiniteScroll(courses.length, () => {});

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title={area_name} />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
        {courses.length === 0 ? ( // 코스가 없는 경우 메시지 출력
          <p className="fonts-recommendSubtitle mt-289pxr flex justify-center">해당 지역의 코스가 없습니다.</p>
        ) : (
          <>
            {courses.slice(0, visibleCount).map((course: CourseResponseDtoDataTypes) => (
              <section key={course.course_id}>
                <BigLocationCard course={course} />
                <div className="h-8pxr w-full bg-gray-1" />
              </section>
            ))}
            {visibleCount < courses.length && (
              <div id="load-more" className="flex items-center justify-center">
                <MoonLoader color="#05cbbe" size={20} speedMultiplier={0.5} />
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
