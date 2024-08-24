import Image from 'next/image';
import { LocationDataTypes } from 'types/common/CommonTypes';

interface LocationCardProps {
  location: LocationDataTypes;
  searchInput: string;
}

export default function LocationCard(props: LocationCardProps) {
  const { location, searchInput } = props;

  // 검색어가 있을 때 강조할 텍스트 생성
  const highlightSearchTerm = (text: string, search: string) => {
    if (!search) return <span>{text}</span>; // 검색어가 없으면 원래 텍스트 반환

    const regex = new RegExp(`(${search})`, 'gi'); // 대소문자를 구분하지 않도록 정규 표현식 생성
    const parts = text.split(regex); // 텍스트를 검색어로 분리

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="text-main-green">
          {part}
        </span> // 강조할 부분
      ) : (
        part // 원래 텍스트
      ),
    );
  };

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
        <p className="fonts-onboardingKeyword text-gray-8">
          {highlightSearchTerm(location.name, searchInput)} {/* 강조된 이름 출력 */}
        </p>
        <p className="fonts-detail">{location.address}</p>
      </section>
    </section>
  );
}
