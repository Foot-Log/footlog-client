'use client';
import { CourseDetailsDataTypes } from 'types/CommonTypes';
import BigLocationCard from '@components/common/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';

interface ListPageProps {
  title: string;
  course: CourseDetailsDataTypes[];
}

export default function page(props: ListPageProps) {
  const { title, course } = props;

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title={title} />
      <section className="flex flex-col gap-24pxr">
        {course.map((course) => (
          <BigLocationCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}
