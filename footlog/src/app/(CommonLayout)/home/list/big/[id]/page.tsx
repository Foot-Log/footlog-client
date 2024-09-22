'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetRegions from '@hooks/home/useGetRegions';
import { AreaCodeDtoDataTypes } from '@api/home/getRegions';
import { MoonLoader } from 'react-spinners';

export default function Page() {
  const pathname = usePathname();
  const area_id = pathname.split('/').pop();

  const { data: regions } = useGetRegions();
  const [area_name, setAreaName] = useState<string>('');
  const [courses, setCourses] = useState<CourseResponseDtoDataTypes[]>([]);
  const [visibleCount, setVisibleCount] = useState(10); // 초기 표시할 데이터 수
  const areaIdNumber = area_id ? Number(area_id) : 0;
  const observer = useRef<IntersectionObserver | null>(null);

  // area_id에 맞는 area_name 찾기
  useEffect(() => {
    if (regions?.data) {
      const foundRegion = regions.data.find((region: AreaCodeDtoDataTypes) => region.areaCode === areaIdNumber);
      setAreaName(foundRegion ? foundRegion.areaName : '전체');
    }
  }, [regions, areaIdNumber]);

  // 코스 데이터 가져오기
  const { data: fetchedCourses } = useGetRegionalCourse(areaIdNumber);

  useEffect(() => {
    if (fetchedCourses?.data) {
      setCourses(fetchedCourses.data);
      console.log('Fetched courses:', fetchedCourses.data); // 디버깅 로그
    }
  }, [fetchedCourses]);

  // Intersection Observer 설정
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const loadMore = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prevCount) => Math.min(prevCount + 10, courses.length));
      }
    };

    observer.current = new IntersectionObserver(loadMore, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 1.0, // 100% 가시화
    });

    const target = document.querySelector('#load-more');
    if (target) {
      observer.current.observe(target);
    }

    return () => {
      if (observer.current && target) {
        observer.current.unobserve(target);
      }
    };
  }, [courses]);

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title={area_name} />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
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
