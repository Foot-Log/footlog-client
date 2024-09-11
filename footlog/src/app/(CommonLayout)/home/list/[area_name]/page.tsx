'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'; // useEffect와 useState import
import { CourseResponseDtoDataTypes } from '@api/home/getRegionalCourse';
import BigLocationCard from '@components/common/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/useGetRegionalCourse';

export default function Page() {
  const searchParams = useSearchParams(); // 쿼리 파라미터 가져오기
  const area_name = searchParams.get('area_name');

  // 상태를 관리하기 위한 useState 사용
  const [areaNameString, setAreaNameString] = useState<string>('');
  const { data: courses } = useGetRegionalCourse(areaNameString); // areaNameString을 사용하여 코스 데이터 가져오기

  useEffect(() => {
    // area_name이 string일 때만 상태 업데이트
    if (typeof area_name === 'string') {
      setAreaNameString(area_name);
    }
  }, [area_name]); // area_name이 변경될 때마다 실행

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
            <BigLocationCard key={course.course_id} course={course} /> // course.id 대신 course.course_id 사용
          ))}
      </section>
    </main>
  );
}
