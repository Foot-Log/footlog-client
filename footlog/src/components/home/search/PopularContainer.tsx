import { popularCourseData } from '@core/popularCourseData';

export default function PopularContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-2 gap-y-32pxr">
          {popularCourseData.map((course) => (
            <div key={course.id} className="flex h-44pxr w-auto items-center justify-center gap-24pxr">
              <span className="fonts-regionName text-main-green">{course.id}</span>
              <span className="fonts-regionName flex-1 text-gray-8">{course.name}</span>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
