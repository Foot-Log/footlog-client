import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { RecommendCoursesDataTypes } from 'types/CommonTypes';
import { recommendCoursesData } from '@core/recommendCoursesData';

export default function RecentCourseContainer() {
  const courses: RecommendCoursesDataTypes[] = recommendCoursesData;

  return (
    <section className="flex w-full flex-col py-28pxr pl-24pxr">
      <h2 className="fonts-recommendTitle">최근 확인한 코스</h2>
      <CoursesSlider courses={courses} />
    </section>
  );
}
