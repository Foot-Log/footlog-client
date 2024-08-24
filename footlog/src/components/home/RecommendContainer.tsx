import CoursesSlider from '@components/common/CoursesSlider/CoursesSlider';
import { RecommendCoursesDataTypes } from 'types/CommonTypes';

interface RecommendContainerProps {
  title: string;
  subtitle: string;
  courses: RecommendCoursesDataTypes[];
}

export default function RecommendContainer(props: RecommendContainerProps) {
  const { title, subtitle, courses } = props;

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col py-20pxr pl-24pxr">
        <h2 className="fonts-recommendTitle mb-4pxr">{title}</h2>
        <p className="fonts-recommendSubtitle">{subtitle}</p>
        <CoursesSlider courses={courses} />
      </section>
      <div className="h-8pxr w-full bg-gray-1" />
    </section>
  );
}
