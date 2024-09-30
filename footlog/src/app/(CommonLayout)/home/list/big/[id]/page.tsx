'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetRegions from '@hooks/home/useGetRegions';
import { AreaCodeDtoDataTypes } from '@api/home/getRegions';
import { useInfiniteScroll } from '@hooks/common/useInfiniteScroll';
import { MoonLoader } from 'react-spinners';

export default function Page() {
  const pathname = usePathname();
  const area_id = pathname.split('/').pop();

  const { data: regions } = useGetRegions();
  const [area_name, setAreaName] = useState<string>('');
  const [courses, setCourses] = useState<CourseResponseDtoDataTypes[]>([]);
  const areaIdNumber = area_id ? Number(area_id) : 0;

  useEffect(() => {
    // 현재 URL을 로컬스토리지에 저장
    localStorage.setItem('previousUrl', window.location.href);
  }, []);

  // area_id에 맞는 area_name 찾기
  useEffect(() => {
    if (regions?.data) {
      const foundRegion = regions.data.find((region: AreaCodeDtoDataTypes) => region.areaCode === areaIdNumber);
      setAreaName(foundRegion ? foundRegion.areaName : '전체');
    }
  }, [regions, areaIdNumber]);

  const { data: fetchedCourses } = useGetRegionalCourse(areaIdNumber);

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
      <section className="scroll-y-auto mt-68pxr flex flex-col gap-24pxr pt-12pxr">
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
      </section>
    </main>
  );
}
