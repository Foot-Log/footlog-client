'use client';
import { useRouter } from 'next/navigation';
import { RecommendCoursesDataTypes } from 'types/common/CommonTypes';
import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { MypageRightArrowIcon } from '@public/icon';

interface MypageContainerProps {
  title: string;
  courses: RecommendCoursesDataTypes[];
}

export default function MypageContainer(props: MypageContainerProps) {
  const { title, courses } = props;
  const router = useRouter();

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col py-20pxr">
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
        <CoursesSlider courses={courses} />
      </section>
    </section>
  );
}
