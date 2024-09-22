import Link from 'next/link';
import { CoursesDataTypes } from 'types/common/CommonTypes';

export default function PopularContainer(props: CoursesDataTypes) {
  const { courses } = props;

  const firstGroup = courses.slice(0, 5);
  const secondGroup = courses.slice(5, 10);

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr pt-8pxr">
        <h2 className="fonts-recommendTitle">인기 코스</h2>
        <div className="flex justify-between">
          <section className="grid w-171pxr grid-cols-1 gap-y-32pxr">
            {firstGroup.map((course, index) => (
              <Link key={course.course_id} href={`/home/details/${course.course_id}`} passHref>
                <div className="flex w-auto items-center justify-center gap-24pxr">
                  <span className="fonts-regionName text-main-green">{index + 1}</span>
                  <span className="font-mypageDetail line-clamp-1 flex-1 text-gray-8">{course.name}</span>
                </div>
              </Link>
            ))}
          </section>
          <section className="grid grid-cols-1 gap-y-32pxr">
            {secondGroup.map((course, index) => (
              <Link key={course.course_id} href={`/home/details/${course.course_id}`} passHref>
                <div className="flex w-auto items-center justify-center gap-24pxr">
                  <span className="fonts-regionName text-main-green">{index + 6}</span> {/* 순위를 6부터 시작 */}
                  <span className="font-mypageDetail line-clamp-1 flex-1 text-gray-8">{course.name}</span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
}
