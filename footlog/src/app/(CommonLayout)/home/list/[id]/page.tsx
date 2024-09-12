'use client';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';

export default function page() {
  // 나중에 지역 api 연결하기
  //const course: CourseDetailsDataTypes = await getMovieDetails(params.id);

  const course: CourseDetailsDataTypes[] = courseDetailsData;

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title="지역명" />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
        {course.map((course) => (
          <BigLocationCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}
