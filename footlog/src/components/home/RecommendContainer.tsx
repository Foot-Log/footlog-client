import Link from 'next/link';
import Image from 'next/image';
import { recommendCoursesData } from '@core/recommendCoursesData';
import { RecommendCoursesDataTypes } from 'types/CommonTypes';

interface RecommendContainerProps {
  title: string;
  subtitle: string;
}

export default function RecommendContainer(props: RecommendContainerProps) {
  const { title, subtitle } = props;
  return (
    <section className="flex w-full flex-col">
      <section className="mt-[68px] flex h-56 w-full flex-col pl-6 pt-[11px]">
        <p className="fonts-recommendTitle mb-1">{title}</p>
        <p className="fonts-recommnedSubtitle">{subtitle}</p>
        <section className="mt-5 flex gap-3 overflow-x-auto">
          {recommendCoursesData.map((course: RecommendCoursesDataTypes) => (
            <Link key={course.id} href={`/details/${course.id}`} passHref>
              <div className="relative flex h-32 w-32 cursor-pointer overflow-hidden rounded-xl bg-[rgba(0,0,0,0.20)]">
                <Image
                  fill
                  src={course.imgSrc}
                  alt={course.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </section>
      </section>
      <div className="bg-gray_1 h-2 w-full" />
    </section>
  );
}
