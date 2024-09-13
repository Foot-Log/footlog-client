'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from '@api/home/list/getRegionalCourse';
import BigLocationCard from '@components/common/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';

export default function Page() {
  const pathname = usePathname(); // 현재 경로 가져오기
  const area_name = pathname.split('/').pop(); // 경로의 마지막 세그먼트를 area_name으로 사용

  const [areaNameString, setAreaNameString] = useState<string>('');
  const { data: courses } = useGetRegionalCourse(areaNameString);

  useEffect(() => {
    // area_name이 string일 때만 상태 업데이트
    if (typeof area_name === 'string') {
      setAreaNameString(area_name);
    }
  }, [area_name]);

  if (!areaNameString) {
    return <></>;
  }

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title={areaNameString} />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
        {courses &&
          courses.data &&
          courses.data.map((course: CourseResponseDtoDataTypes) => (
            <BigLocationCard key={course.course_id} course={course} />
          ))}
      </section>
    </main>
  );
}
