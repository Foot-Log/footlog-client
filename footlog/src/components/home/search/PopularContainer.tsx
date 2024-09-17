import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface PopularContainerProps {
  popularCourses: CourseResponseDtoDataTypes[];
}

export default function PopularContainer(props: PopularContainerProps) {
  const { popularCourses } = props;

  const firstGroup = popularCourses.slice(0, 5);
  const secondGroup = popularCourses.slice(5, 10);

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">인기 코스</h2>
        <div className="flex justify-between">
          <section className="grid w-171pxr grid-cols-1 gap-y-32pxr">
            {firstGroup.map((course, index) => (
              <div key={course.course_id} className="flex w-auto items-center justify-center gap-24pxr">
                <span className="fonts-regionName text-main-green">{index + 1}</span>
                <span className="fonts-regionName line-clamp-1 flex-1 text-gray-8">{course.name}</span>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-1 gap-y-32pxr">
            {secondGroup.map((course, index) => (
              <div key={course.course_id} className="flex w-auto items-center justify-center gap-24pxr">
                <span className="fonts-regionName text-main-green">{index + 6}</span> {/* 순위를 6부터 시작 */}
                <span className="fonts-regionName line-clamp-1 flex-1 text-gray-8">{course.name}</span>
              </div>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
}
