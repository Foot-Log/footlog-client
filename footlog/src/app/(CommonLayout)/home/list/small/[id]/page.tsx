'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import { CityRegionsDtoDataTypes } from 'types/home/search/SearchTypes';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetCityRegions from '@hooks/home/search/useGetCityRegions';
import { AreaCodeDtoDataTypes } from '@api/home/getRegions';

export default function Page() {
  const pathname = usePathname();
  const area_id = pathname.split('/').pop();

  const { data: regions } = useGetCityRegions();
  const [area_name, setAreaName] = useState<string>('');
  const areaIdNumber = area_id ? Number(area_id) : 0;

  // area_id에 맞는 area_name 찾기
  useEffect(() => {
    if (regions?.data) {
      if (areaIdNumber === 0) {
        setAreaName('전체');
      } else {
        const foundRegion = regions.data.find((region: CityRegionsDtoDataTypes) => region.sigunguId === areaIdNumber);
        if (foundRegion) {
          setAreaName(foundRegion.sigunguName);
        } else {
          setAreaName('전체');
        }
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
            <section key={course.course_id}>
              <BigLocationCard course={course} />
              <div className="h-8pxr w-full bg-gray-1" />
            </section>
          ))}
      </section>
    </main>
  );
}
