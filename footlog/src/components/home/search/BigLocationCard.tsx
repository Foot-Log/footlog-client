import Image from 'next/image';
import { LocationCardProps } from 'types/common/CommonTypes';

export default function BigLocationCard(props: LocationCardProps) {
  const { location, searchInput } = props;

  return (
    <section className="flex flex-col items-center gap-20pxr">
      <section className="flex flex-col items-start gap-4pxr">
        <p className="fonts-onboardingKeyword text-gray-8">{location.name}</p>
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
