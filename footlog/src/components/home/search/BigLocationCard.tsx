import Image from 'next/image';
import Link from 'next/link';
import { LocationCardProps } from 'types/common/CommonTypes';
import { SearchSaveFilledIcon, SearchSaveOutlineIcon } from '@public/icon';

export default function BigLocationCard(props: LocationCardProps) {
  const { location } = props;

  return (
    <section className="relative flex flex-col px-24pxr">
      <Link
        key={location.id}
        href={`/home/details/${location.id}`}
        passHref
        className="flex cursor-pointer flex-col gap-20pxr">
        <section className="flex flex-col items-start gap-4pxr">
          <p className="fonts-recommendTitle">{location.name}</p>
          <p className="fonts-detail">{location.address}</p>
        </section>
        <figure className="relative flex h-148pxr w-345pxr overflow-hidden rounded-xl">
          <Image
            fill
            src={location.imgSrc}
            alt={location.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority
          />
        </figure>
      </Link>
      <button className="absolute right-24pxr top-3pxr">
        {location.isSaved ? <SearchSaveFilledIcon /> : <SearchSaveOutlineIcon />}
      </button>
    </section>
  );
}
