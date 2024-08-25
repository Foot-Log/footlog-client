import React from 'react';
import { RecommendCoursesDataTypes } from 'types/common/CommonTypes';
import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';

interface MypageContainerProps {
  title: string;
  courses: RecommendCoursesDataTypes[];
}

export default function MypageContainer(props: MypageContainerProps) {
  const { title, courses } = props;

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col py-20pxr">
        <h2 className="fonts-recommendTitle mb-4pxr">{title}</h2>
        <CoursesSlider courses={courses} />
      </section>
    </section>
  );
}
