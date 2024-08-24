import Image from 'next/image';
import { LocationDataTypes } from 'types/common/CommonTypes';

interface LocationCardProps {
  location: LocationDataTypes;
}

export default function LocationCard(props: LocationCardProps) {
  const { location } = props;

  return (
    <section className="flex gap-16pxr">
      <figure className="relative flex h-128pxr w-128pxr cursor-pointer overflow-hidden rounded-xl">
        <Image
          fill
          src={location.imgSrc}
          alt={location.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="z-0 object-cover" // 이미지가 배경 아래에 있도록 설정
          priority
        />
      </figure>
      <section className="flex flex-col gap-4pxr">
        <p className="fonts-onboardingBtn">{location.name}</p>
        <p className="fonts-detail">{location.address}</p>
      </section>
    </section>
  );
}
