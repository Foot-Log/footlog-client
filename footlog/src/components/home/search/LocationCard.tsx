import Image from 'next/image';
import { LocationDataTypes } from 'types/common/CommonTypes';

interface LocationCardProps {
  location: LocationDataTypes;
}

export default function LocationCard(props: LocationCardProps) {
  const { location } = props;

  return (
    <section className="flex items-center gap-16pxr">
      <figure className="relative flex h-64pxr w-64pxr cursor-pointer overflow-hidden rounded-xl">
        <Image
          fill
          src={location.imgSrc}
          alt={location.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority
        />
      </figure>
      <section className="flex flex-col items-start gap-4pxr">
        <p className="fonts-onboardingBtn">{location.name}</p>
        <p className="fonts-detail">{location.address}</p>
      </section>
    </section>
  );
}
