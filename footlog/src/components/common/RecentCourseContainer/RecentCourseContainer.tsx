'use client';
import { usePathname } from 'next/navigation';
import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { CoursesDataTypes } from 'types/common/CommonTypes';

export default function RecentCourseContainer(props: CoursesDataTypes) {
  const { courses } = props;
  const pathname = usePathname();
  const isMyPage = pathname.includes('/mypage');

  return (
    <section className="flex w-full flex-col py-20pxr pl-24pxr">
      <h2 className="fonts-recommendTitle">최근 확인한 코스</h2>
      <section className="flex w-full items-center">
        {courses.length === 0 ? (
          isMyPage ? (
            <p className="fonts-recommendSubtitle mb-57pxr ml-106pxr mt-71pxr">최근 확인한 코스가 없습니다.</p>
          ) : (
            <p className="fonts-recommendSubtitle flex pt-20pxr">최근 확인한 코스가 없습니다.</p>
          )
        ) : (
          <CoursesSlider courses={courses} />
        )}
      </section>
    </section>
  );
}
