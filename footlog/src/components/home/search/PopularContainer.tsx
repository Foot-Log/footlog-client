import { popularCourseData } from '@core/popularCourseData';

export default function PopularContainer() {
  const firstGroup = popularCourseData.slice(0, 5);
  const secondGroup = popularCourseData.slice(5, 10);

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <div className="flex justify-between">
          <section className="grid grid-cols-1 gap-y-32pxr">
            {firstGroup.map((course, index) => (
              <div key={course.id} className="flex w-auto items-center justify-center gap-24pxr">
                <span className="fonts-regionName text-main-green">{index + 1}</span>
                <span className="fonts-regionName flex-1 text-gray-8">{course.name}</span>
              </div>
            ))}
          </section>
          <section className="grid grid-cols-1 gap-y-32pxr">
            {secondGroup.map((course, index) => (
              <div key={course.id} className="flex w-auto items-center justify-center gap-24pxr">
                <span className="fonts-regionName text-main-green">{index + 6}</span> {/* 순위를 6부터 시작 */}
                <span className="fonts-regionName flex-1 text-gray-8">{course.name}</span>
              </div>
            ))}
          </section>
        </div>
      </section>
    </section>
  );
}
