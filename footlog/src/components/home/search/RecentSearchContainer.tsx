import { recentSearchData } from '@core/recentSearchData';
import { CloseIcon } from '@public/icon';
import { SearchLogDtoDataTypes } from '@api/home/search/getRecentSearch';

export interface RecentSearchContainerProps {
  recentSearchData: SearchLogDtoDataTypes[];
}

export default function RecentSearchContainer(props: RecentSearchContainerProps) {
  const { recentSearchData } = props;

  return (
    <section className="flex w-full flex-col gap-19pxr pl-24pxr pt-12pxr">
      <h2 className="fonts-recommendTitle">최근 검색어</h2>
      <section className="flex gap-8pxr overflow-x-auto">
        {recentSearchData.map((search) => (
          <div
            key={search.createdAt}
            className="flex h-36pxr w-auto items-center justify-center gap-12pxr rounded-searchBox border border-gray-2 px-16pxr">
            <span className="fonts-recommendSubtitle flex-1 whitespace-nowrap">{search.log}</span>
            <CloseIcon />
          </div>
        ))}
      </section>
    </section>
  );
}
