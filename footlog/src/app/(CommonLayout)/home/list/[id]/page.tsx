'use client';
import { CourseDetailsDataTypes } from 'types/CommonTypes';
import BigLocationCard from '@components/common/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';

/*
interface ListPageProps {
  params: { id: string };
}
*/

export default function page() {
  //const {params} = props;
  // 나중에 api 연결하기
  //const course: CourseDetailsDataTypes = await getMovieDetails(params.id);

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
