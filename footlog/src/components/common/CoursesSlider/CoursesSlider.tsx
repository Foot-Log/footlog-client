import Link from 'next/link';
import Image from 'next/image';
import { RecommendCoursesDataTypes } from 'types/CommonTypes';
import { SaveFilledIcon, SaveOutlineIcon } from '@public/icon';

interface CoursesSliderProps {
  courses: RecommendCoursesDataTypes[]; // RecommendCoursesDataTypes 배열, 즉 코스 데이터를 props로 받음
}

export default function CoursesSlider(props: CoursesSliderProps) {
  const { courses } = props;

  return (
    <section className="mt-20pxr flex gap-12pxr overflow-x-auto">
      {courses.map((course) => (
        <Link key={course.id} href={`/home/details/${course.id}`} passHref>
          <figure className="relative flex h-128pxr w-128pxr cursor-pointer overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 h-full w-full rounded-xl bg-[rgba(0,0,0,0.20)]" />
            <Image
              fill
              src={course.imgSrc}
              alt={course.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="z-0 object-cover" // 이미지가 배경 아래에 있도록 설정
              priority
            />
            <figcaption className="absolute bottom-0 left-0 z-20 pb-8pxr pl-8pxr">
              <h2 className="fonts-courseName">{course.title}</h2>
              <p className="fonts-courseLocation">{course.subtitle}</p>
            </figcaption>
            <div className="absolute right-12pxr top-12pxr">
              {course.isSaved ? <SaveFilledIcon /> : <SaveOutlineIcon />}
            </div>
          </figure>
        </Link>
      ))}
    </section>
  );
}
