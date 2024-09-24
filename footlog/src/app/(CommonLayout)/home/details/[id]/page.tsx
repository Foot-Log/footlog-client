'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DetailsHeader from '@components/home/details/DetailsHeader';
import ImageContainer from '@components/home/details/ImageContainer';
import InfoContainer from '@components/home/details/InfoContainer';
import BlogContainer from '@components/home/details/BlogContainer';
import FinishBtn from '@components/home/details/FinishBtn';
import useGetCourseDetails from '@hooks/home/details/useGetCourseDetails';
import useGetBlogPosting from '@hooks/home/details/useGetBlogPosting';
import usePostSave from '@hooks/home/details/usePostSave';
import usePostComplete from '@hooks/home/details/usePostComplete';
import useGetCompletedList from '@hooks/log/useGetCompletedList';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';
import useGetRecommend from '@hooks/home/useGetRecommend';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';
import useGetCityCourse from '@hooks/home/list/useGetCityCourse';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';

export default function Page() {
  const pathname = usePathname();
  const course_id = pathname.split('/').pop();
  const { mutate: postCompleteMutate } = usePostComplete();
  const { mutate: postSaveMutate } = usePostSave();

  const courseIdNumber = course_id ? Number(course_id) : undefined;

  const { data: courseResponse, refetch: refetchCourseDetails = () => {} } = courseIdNumber
    ? useGetCourseDetails(courseIdNumber)
    : { data: null };
  const { data: blogResponse } = courseIdNumber ? useGetBlogPosting(courseIdNumber) : { data: null };
  const { refetch: refetchCompletedList } = useGetCompletedList();
  const { refetch: refetchSavedList } = useGetSaveCourseList();
  const { refetch: refetchRecommend } = useGetRecommend();
  const { refetch: refetchPopular } = useGetPopularCourse();
  const { refetch: refetchRecentCourse } = useGetRecentCourse();

  const [isBigPage, setIsBigPage] = useState(false);
  const [regionIdNumber, setRegionIdNumber] = useState<number | undefined>(undefined);

  const { refetch: refetchSmallCourse } = useGetCityCourse(regionIdNumber ? regionIdNumber : 1);
  const { refetch: refetchBigCourse } = useGetRegionalCourse(regionIdNumber ? regionIdNumber : 1);

  useEffect(() => {
    const previousUrl = localStorage.getItem('previousUrl');
    if (previousUrl) {
      const previousPathname = new URL(previousUrl).pathname; // URL의 경로만 가져오기
      console.log('Previous pathname:', previousPathname);

      const region_id = previousPathname.split('/').pop(); // 이전 URL의 마지막 부분
      const regionId = region_id ? Number(region_id) : undefined; // 숫자로 변환

      console.log('Extracted regionId:', regionId);
      setRegionIdNumber(regionId);
      setIsBigPage(previousPathname.includes('/big'));
    }
  }, []);

  const handleSaveClick = () => {
    postSaveMutate(
      { course_id: course.course_id },
      {
        onSuccess: () => {
          refetchCourseDetails();
          refetchSavedList();
          refetchRecommend();
          refetchPopular();
          refetchRecentCourse();

          // BigPage일 경우 BigCourse refetch
          if (isBigPage && regionIdNumber) {
            refetchBigCourse();
          }
          // SmallPage일 경우 SmallCourse refetch
          if (!isBigPage && regionIdNumber) {
            refetchSmallCourse();
          }
        },
      },
    );
  };

  const handleFinishClick = () => {
    postCompleteMutate(
      { course_id: course.course_id },
      {
        onSuccess: () => {
          refetchCourseDetails();
          refetchCompletedList();
        },
      },
    );
  };

  const handleBackClick = () => {
    console.log('Refetching for regionId:', regionIdNumber);
    if (isBigPage) {
      refetchBigCourse();
    } else {
      refetchSmallCourse();
    }
  };

  if (!courseResponse || !blogResponse) {
    return <></>;
  }

  const course = courseResponse.data;
  const posting = blogResponse.data;

  return (
    <main className="relative flex h-full w-full flex-col">
      <DetailsHeader
        title={course.name}
        isSaved={course.isSave}
        onClick={handleSaveClick}
        onBackClick={handleBackClick}
      />
      <section className="mt-68pxr flex flex-col pb-68pxr">
        <ImageContainer title={course.name} imgSrc={course.image} />
        <InfoContainer
          summary={course.summary}
          address={course.address}
          charge={course.charge === '정보 없음' ? '프로그램별로 이용요금 상이' : course.charge}
          time=""
          tel={course.tel}
          homepage={course.homepage === '정보 없음' ? '홈페이지 / 웹사이트 URL' : course.homepage}
        />
        <div className="h-8pxr w-full bg-gray-1" />
        <BlogContainer title={course.name} posting={posting} />
      </section>
      <FinishBtn isComplete={course.isComplete} onClick={handleFinishClick} />
    </main>
  );
}
