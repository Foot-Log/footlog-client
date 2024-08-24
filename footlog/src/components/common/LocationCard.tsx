import Image from 'next/image';
import Link from 'next/link';
import { LocationCardProps } from 'types/common/CommonTypes';
import { highlightSearchTerm } from '@utils/highlightSearchTerm';

export default function LocationCard(props: LocationCardProps) {
  const { course, searchInput } = props;

  return (
    <Link
      key={course.id}
      href={`/home/details/${course.id}`}
      passHref
      className="flex cursor-pointer items-center gap-16pxr pl-24pxr">
      <figure className="relative flex h-64pxr w-64pxr overflow-hidden rounded-xl">
        <Image
          fill
          src={course.imgSrc}
          alt={course.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority
        />
      </figure>
      <section className="flex flex-col items-start gap-4pxr">
        <p className="fonts-onboardingKeyword text-gray-8">
          {highlightSearchTerm(course.title, searchInput)} {/* 강조된 이름 출력 */}
        </p>
        <p className="fonts-detail">{course.address}</p>
      </section>
    </Link>
  );
}
