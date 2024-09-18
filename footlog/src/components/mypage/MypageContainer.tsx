'use client';
import { useRouter } from 'next/navigation';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { MypageRightArrowIcon } from '@public/icon';

interface MypageContainerProps {
  title: string;
  courses: CourseResponseDtoDataTypes[];
}

export default function MypageContainer(props: MypageContainerProps) {
  const { title, courses } = props;
  console.log('courrrrr', courses);
  const router = useRouter();

  return (
    <section className="ml-24pxr flex w-full flex-col">
      <section className="flex w-full flex-col py-20pxr">
        {courses && courses.length > 0 ? (
          <div>
            {' '}
            <section className="flex w-full items-center justify-between">
              <h2 className="fonts-recommendTitle">{title}</h2>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-8pxr pr-24pxr"
                onClick={() => router.push('/mypage/save')}>
                <p className="fonts-detail">전체 보기</p>
                <MypageRightArrowIcon />
              </button>
            </section>
            <CoursesSlider courses={courses} />{' '}
          </div>
        ) : (
          <div>
            <section className="flex w-full items-center justify-between">
              <h2 className="fonts-recommendTitle">{title}</h2>
            </section>
            <div className="fonts-mypageNull mb-43pxr ml-106pxr mt-71pxr">저장한 코스가 없습니다.</div>
          </div>
        )}
      </section>
    </section>
  );
}
