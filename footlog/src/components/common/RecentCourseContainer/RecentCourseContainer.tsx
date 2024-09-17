import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface RecentCourseContainerProps {
  recentCourses: CourseResponseDtoDataTypes[];
}

export default function RecentCourseContainer(props: RecentCourseContainerProps) {
  const { recentCourses } = props;

  return (
    <section className="flex w-full flex-col py-28pxr pl-24pxr">
      <h2 className="fonts-recommendTitle">최근 확인한 코스</h2>
      <section className="flex items-center justify-center">
        {recentCourses.length === 0 ? (
          <p className="fonts-recommendSubtitle flex">최근 확인한 코스가 존재하지 않습니다.</p>
        ) : (
          <CoursesSlider courses={recentCourses} />
        )}
      </section>
    </section>
  );
}
