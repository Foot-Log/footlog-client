'use client';
import { CourseDetailsDataTypes, BlogPostingDataTypes } from 'types/CommonTypes';
import { courseDetailsData } from '@core/courseDetailsData';
import DetailsHeader from '@components/details/DetailsHeader';
import ImageContainer from '@components/details/ImageContainer';
import InfoContainer from '@components/details/InfoContainer';
import BlogContainer from '@components/details/BlogContainer';
import FinishBtn from '@components/details/FinishBtn';

/*
interface DetailsPageProps {
  params: { id: string };
}
*/

export default function page() {
  // 나중에 api 연결하기
  //const course: CourseDetailsDataTypes = await getMovieDetails(params.id); 이런식으로

  const course: CourseDetailsDataTypes = courseDetailsData;

  return (
    <main className="relative flex h-full w-full flex-col">
      <DetailsHeader title={course.title} isSaved={course.isSaved} />
      <section className="mt-68pxr flex flex-col">
        <ImageContainer title={course.title} imgSrc={course.imgSrc} />
        <InfoContainer
          description={course.description}
          location={course.location}
          price={course.price}
          time={course.time}
          call={course.call}
          site={course.site}
        />
        <div className="h-8pxr w-full bg-gray_1" />
        <BlogContainer />
      </section>
      <FinishBtn isComplete={course.isComplete} />
    </main>
  );
}
