import Image from 'next/image';
import Link from 'next/link';
import { LocationCardProps } from 'types/common/CommonTypes';
import { SearchSaveFilledIcon, SearchSaveOutlineIcon } from '@public/icon';

export default function BigLocationCard(props: LocationCardProps) {
  const { course } = props;

  return (
    <section className="relative mb-20pxr flex flex-col px-24pxr">
      <Link
        key={course.course_id}
        href={`/home/details/${course.course_id}`}
        passHref
        className="flex cursor-pointer flex-col gap-20pxr">
        <section className="flex flex-col items-start gap-4pxr">
          <p className="fonts-recommendTitle">{course.name}</p>
          <p className="fonts-detail">{course.area}</p>
        </section>
        <figure className="relative flex h-148pxr w-345pxr overflow-hidden rounded-xl">
          <Image
            fill
            src={course.image || '/courseExample.png'}
            alt={course.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority
          />
        </figure>
      </Link>
      <button className="absolute right-24pxr top-3pxr">
        {course.isSave ? <SearchSaveFilledIcon /> : <SearchSaveOutlineIcon />}
      </button>
    </section>
  );
}
