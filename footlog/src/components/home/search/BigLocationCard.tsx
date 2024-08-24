import Image from 'next/image';
import { LocationCardProps } from 'types/common/CommonTypes';
import { SearchSaveFilledIcon, SearchSaveOutlineIcon } from '@public/icon';

export default function BigLocationCard(props: LocationCardProps) {
  const { location } = props;

  return (
    <section className="flex flex-col gap-20pxr px-24pxr">
      <section className="flex flex-col items-start gap-4pxr">
        <section className="flex w-full items-center justify-between">
          <p className="fonts-recommendTitle">{location.name}</p>
          {location.isSaved ? <SearchSaveFilledIcon /> : <SearchSaveOutlineIcon />}
        </section>
        <p className="fonts-detail">{location.address}</p>
      </section>
      <figure className="relative flex h-148pxr w-345pxr cursor-pointer overflow-hidden rounded-xl">
        <Image
          fill
          src={location.imgSrc}
          alt={location.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority
        />
      </figure>
    </section>
  );
}
