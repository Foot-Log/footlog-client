'use client';
import BigLocationCard from '@components/common/LocationCard/BigLocationCard';
import ListHeader from '@components/home/list/ListHeader';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';

export default function page() {
  const { data: saveCourses } = useGetSaveCourseList();

  return (
    <main className="relative flex h-full w-full flex-col">
      <ListHeader title="저장 목록" />
      <section className="mt-68pxr flex flex-col gap-24pxr pt-12pxr">
        {saveCourses?.data.map((course) => (
          <section key={course.course_id}>
            <BigLocationCard course={course} />
            <div className="h-8pxr w-full bg-gray-1" />
          </section>
        ))}
      </section>
    </main>
  );
}
