'use client';
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

export default function page() {
  const pathname = usePathname();
  const course_id = pathname.split('/').pop();
  const { mutate: postCompleteMutate } = usePostComplete();
  const { mutate: postSaveMutate } = usePostSave();

  const courseIdNumber = course_id ? Number(course_id) : undefined; // courseId를 숫자로 변환

  const { data: courseResponse, refetch: refetchCourseDetails = () => {} } = courseIdNumber
    ? useGetCourseDetails(courseIdNumber)
    : { data: null };
  const { data: blogResponse } = courseIdNumber ? useGetBlogPosting(courseIdNumber) : { data: null };
  const { refetch: refetchCompletedList } = useGetCompletedList();
  const { refetch: refetchSavedList } = useGetSaveCourseList();
  const { refetch: refetchRecommend } = useGetRecommend();
  const { refetch: refetchPopular } = useGetPopularCourse();
  const { refetch: refetchRecentCourse } = useGetRecentCourse();

  if (!courseResponse || !blogResponse) {
    return <></>;
  }

  const course = courseResponse.data;
  const posting = blogResponse.data;

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

  return (
    <main className="relative flex h-full w-full flex-col">
      <DetailsHeader title={course.name} isSaved={course.isSave} onClick={handleSaveClick} />
      <section className="mt-68pxr flex flex-col pb-68pxr">
        <ImageContainer title={course.name} imgSrc={course.image} />
        <InfoContainer
          description={course.summary}
          address={course.address}
          price="각 프로그램별로 이용요금 상이"
          time=""
          call={course.tel}
          site="홈페이지 / 웹사이트 URL"
        />
        <div className="h-8pxr w-full bg-gray-1" />
        <BlogContainer title={course.name} posting={posting} />
      </section>
      <FinishBtn isComplete={course.isComplete} onClick={handleFinishClick} />
    </main>
  );
}
