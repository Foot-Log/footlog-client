'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from '@api/home/list/getRegionalCourse';
import BigLocationCard from '@components/common/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetRegions from '@hooks/home/useGetRegions';
import { AreaCodeDtoDataTypes } from '@api/getRegions';

export default function Page() {
  const pathname = usePathname(); // 현재 경로 가져오기
  const area_id = pathname.split('/').pop(); // 경로의 마지막 세그먼트를 area_name으로 사용

  const { data: regions } = useGetRegions();
  const [area_name, setAreaName] = useState<string>('');

  // area_id에 맞는 area_name 찾기
  useEffect(() => {
    if (regions && regions.data && area_id) {
      const foundRegion = regions.data.find((region: AreaCodeDtoDataTypes) => region.areaCode.toString() === area_id);
      setAreaName(foundRegion ? foundRegion.areaName : null);
    }
  }, [regions, area_id]);

  // area_name이 설정되면 코스 데이터를 가져오기
  const { data: courses } = useGetRegionalCourse(area_name);

  if (!area_name) {
    return <></>;
  }

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title={area_name} />
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
