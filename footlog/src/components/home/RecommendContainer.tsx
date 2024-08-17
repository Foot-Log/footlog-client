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
      <section className="flex h-56 w-full flex-col pl-6 pt-[11px]">
        <p className="fonts-recommendTitle mb-1">{title}</p>
        <p className="fonts-recommnedSubtitle">{subtitle}</p>
        <CoursesSlider courses={courses} />
      </section>
      <div className="bg-gray_1 h-2 w-full" />
    </section>
  );
}
