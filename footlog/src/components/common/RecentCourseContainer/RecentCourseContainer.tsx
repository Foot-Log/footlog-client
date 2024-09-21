import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { CoursesDataTypes } from 'types/common/CommonTypes';

export default function RecentCourseContainer(props: CoursesDataTypes) {
  const { courses } = props;

  return (
    <section className="flex w-full flex-col py-28pxr pl-24pxr">
      <h2 className="fonts-recommendTitle">최근 확인한 코스</h2>
      <section className="flex items-center">
        {courses.length === 0 ? (
          <p className="fonts-recommendSubtitle flex pt-20pxr">최근 확인한 코스가 존재하지 않습니다.</p>
        ) : (
          <CoursesSlider courses={courses} />
        )}
      </section>
    </section>
  );
}
