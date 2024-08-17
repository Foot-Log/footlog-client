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
      <section className="flex w-full flex-col py-5 pl-6">
        <h2 className="fonts-recommendTitle mb-1">{title}</h2>
        <p className="fonts-recommnedSubtitle">{subtitle}</p>
        <CoursesSlider courses={courses} />
      </section>
      <div className="bg-gray_1 h-2 w-full" />
    </section>
  );
}
