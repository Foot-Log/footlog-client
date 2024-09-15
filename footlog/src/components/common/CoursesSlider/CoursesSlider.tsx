import Link from 'next/link';
import Image from 'next/image';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import { SaveFilledIcon, SaveOutlineIcon } from '@public/icon';
import usePostSave from '@hooks/home/details/usePostSave';

interface CoursesSliderProps {
  courses: CourseResponseDtoDataTypes[];
}

export default function CoursesSlider(props: CoursesSliderProps) {
  const { courses } = props;

  const { mutate: postSaveMutate } = usePostSave();

  const handleSaveClick = (course_id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // 링크 클릭 이벤트 방지
    e.preventDefault(); // 기본 링크 동작 방지

    postSaveMutate(
      { course_id: course_id },
      {
        onSuccess: () => {
          // 성공적으로 저장한 후, course details를 다시 fetch
          // queryClient.invalidateQueries({ queryKey: ['getCourseDetails', courseIdNumber] });
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
              {course.isSave ? <SaveFilledIcon /> : <SaveOutlineIcon />}
            </button>
          </figure>
        </Link>
      ))}
    </section>
  );
}
