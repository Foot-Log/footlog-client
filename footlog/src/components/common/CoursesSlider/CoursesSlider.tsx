import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import { SaveFilledIcon, SaveOutlineIcon } from '@public/icon';
import usePostSave from '@hooks/home/details/usePostSave';
import { CoursesDataTypes } from 'types/common/CommonTypes';

export default function CoursesSlider(props: CoursesDataTypes) {
  const { courses } = props;
  const { mutate: postSaveMutate } = usePostSave();

  // 각 코스의 저장 상태를 관리하기 위한 상태 추가
  // 초기에는 전달 받은 코스의 isSave로 설정하고
  // 그후는 저장 클릭에 따라 상태 저장
  const [savedCourses, setSavedCourses] = useState<{ [key: number]: boolean }>(
    courses.reduce(
      (acc, course) => {
        acc[course.course_id] = course.isSave; // 초기 상태 설정
        return acc;
      },
      {} as { [key: number]: boolean },
    ),
  );

  const handleSaveClick = (course_id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 링크 클릭 이벤트 방지
    e.preventDefault(); // 기본 링크 동작 방지

    const newSaveState = !savedCourses[course_id]; // 다시 클릭 시 저장 해제

    postSaveMutate(
      { course_id: course_id },
      {
        onSuccess: () => {
          setSavedCourses((prev) => ({ ...prev, [course_id]: newSaveState }));
        },
      },
    );
  };

  return (
    <section className="mt-20pxr flex gap-12pxr overflow-x-auto">
      {courses.map((course) => (
        <Link key={course.course_id} href={`/home/details/${course.course_id}`} passHref>
          <figure className="relative flex h-128pxr w-128pxr cursor-pointer overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 h-full w-full rounded-xl bg-[rgba(0,0,0,0.20)]" />
            <Image
              fill
              src={course.image || '/courseExample.png'}
              alt={course.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="z-0 object-cover" // 이미지가 배경 아래에 있도록 설정
              priority
            />
            <figcaption className="absolute bottom-0 left-0 z-20 pb-8pxr pl-8pxr">
              <h2 className="fonts-courseName line-clamp-1">{course.name}</h2>
              <p className="fonts-courseLocation">{course.area}</p>
            </figcaption>
            <button
              type="button"
              className="absolute right-12pxr top-12pxr z-10 cursor-pointer"
              onClick={(e) => handleSaveClick(course.course_id, e)}>
              {savedCourses[course.course_id] ? <SaveFilledIcon /> : <SaveOutlineIcon />}
            </button>
          </figure>
        </Link>
      ))}
    </section>
  );
}
