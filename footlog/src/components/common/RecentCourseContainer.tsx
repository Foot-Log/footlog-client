import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
//import { RecommendCoursesDataTypes } from 'types/common/CommonTypes';
//import { recommendCoursesData } from '@core/recommendCoursesData';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

interface RecentCourseContainerProps {
  courses: CourseResponseDtoDataTypes[];
}

export default function RecentCourseContainer(props: RecentCourseContainerProps) {
  const { courses } = props;

  return (
    <section className="flex w-full flex-col py-28pxr pl-24pxr">
      <h2 className="fonts-recommendTitle">최근 확인한 코스</h2>

      {courses && courses.length > 0 ? (
        <CoursesSlider courses={courses} />
      ) : (
        <div>
          <div className="fonts-mypageNull mb-57pxr ml-92pxr mt-71pxr">최근 확인한 코스가 없습니다.</div>
        </div>
      )}
    </section>
  );
}
