'use client';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';

export default function page() {
  const course: CourseDetailsDataTypes[] = courseDetailsData;

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title="저장 목록" />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
        {course.map((course) => (
          <BigLocationCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}
