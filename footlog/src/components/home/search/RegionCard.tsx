import { SearchLocationIcon } from '@public/icon';
import { RegionCardProps } from 'types/home/search/SearchTypes';
import { highlightSearchTerm } from '@utils/highlightSearchTerm';

export default function RegionCard(props: RegionCardProps) {
  const { location, searchInput } = props;

  return (
    <section className="flex items-center gap-21pxr pl-28pxr">
      <SearchLocationIcon />
      <section className="flex cursor-pointer flex-col items-start gap-4pxr">
        <p className="fonts-onboardingKeyword text-gray-8">
          {highlightSearchTerm(location.sigunguName, searchInput)} {/* 강조된 이름 출력 */}
        </p>
        <p className="fonts-detail">{location.withArea}</p>
      </section>
    </section>
  );
}
