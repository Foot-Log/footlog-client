'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import DetailsHeader from '@components/home/details/DetailsHeader';
import ImageContainer from '@components/home/details/ImageContainer';
import InfoContainer from '@components/home/details/InfoContainer';
import BlogContainer from '@components/home/details/BlogContainer';
import FinishBtn from '@components/home/details/FinishBtn';
import { getCourseDetails } from '@api/home/details/getCourseDetails';
import useGetCourseDetails from '@hooks/home/details/useGetCourseDetails';
import usePostSave from '@hooks/home/details/usePostSave';
import usePostComplete from '@hooks/home/details/usePostComplete';

export default function page() {
  const pathname = usePathname(); // 현재 경로 가져오기
  const course_id = pathname.split('/').pop(); // 경로의 마지막 세그먼트를 course_id로 사용
  const queryClient = useQueryClient();
  const { mutate: postCompleteMutate } = usePostComplete();
  const { mutate: postSaveMutate } = usePostSave();

  const courseIdNumber = course_id ? Number(course_id) : undefined; // courseId를 숫자로 변환

  const { data: courseResponse } = courseIdNumber ? useGetCourseDetails(courseIdNumber) : { data: null };

  if (!courseResponse || !courseResponse.data) {
    return <></>;
  }

  const course = courseResponse.data;

  const handleSaveClick = () => {
    postSaveMutate(
      { course_id: course.course_id },
      {
        onSuccess: () => {
          // 성공적으로 저장한 후, course details를 다시 fetch
          queryClient.invalidateQueries({ queryKey: ['getCourseDetails', courseIdNumber] });
        },
      },
    );
  };

  const handleFinishClick = () => {
    postCompleteMutate(
      { course_id: course.course_id },
      {
        onSuccess: () => {
          // 성공적으로 저장한 후, course details를 다시 fetch
          queryClient.invalidateQueries({ queryKey: ['getCourseDetails', courseIdNumber] });
        },
      },
    );
  };

  return (
    <main className="relative flex h-full w-full flex-col">
      <DetailsHeader title={course.name} isSaved={course.isSave} onClick={handleSaveClick} />
      <section className="mt-68pxr flex flex-col pb-68pxr">
        <ImageContainer title={course.name} imgSrc={course.image} />
        <InfoContainer
          description={course.summary}
          address={course.address}
          price="각 프로그램별로 이용요금 상이"
          time="09:00 ~ 18:00"
          call={course.tel}
          site="홈페이지 / 웹사이트 URL"
        />
        <div className="h-8pxr w-full bg-gray-1" />
        <BlogContainer title={course.name} />
      </section>
      <FinishBtn isComplete={course.isComplete} onClick={handleFinishClick} />
    </main>
  );
}
