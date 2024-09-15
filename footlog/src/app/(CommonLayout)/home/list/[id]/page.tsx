'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetRegions from '@hooks/home/useGetRegions';
import { AreaCodeDtoDataTypes } from '@api/getRegions';

export default function Page() {
  const pathname = usePathname(); // 현재 경로 가져오기
  const area_id = pathname.split('/').pop(); // 경로의 마지막 세그먼트를 area_name으로 사용

  const { data: regions } = useGetRegions();
  const [area_name, setAreaName] = useState<string>('');
  const areaIdNumber = area_id ? Number(area_id) : 0;

  // area_id에 맞는 area_name 찾기
  useEffect(() => {
    if (regions?.data && areaIdNumber) {
      const foundRegion = regions.data.find((region: AreaCodeDtoDataTypes) => region.areaCode === areaIdNumber);
      if (foundRegion) {
        setAreaName(foundRegion.areaName);
      } else {
        setAreaName('전체');
      }
    }
  }, [regions, areaIdNumber]);

  const { data: courses } = useGetRegionalCourse(areaIdNumber);

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
