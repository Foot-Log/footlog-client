import { CloseIcon } from '@public/icon';
import { SearchLogDtoDataTypes } from '@api/home/search/getRecentSearch';

export interface RecentSearchContainerProps {
  recentSearch: SearchLogDtoDataTypes[];
}

export default function RecentSearchContainer(props: RecentSearchContainerProps) {
  const { recentSearch } = props;

  return (
    <section className="flex w-full flex-col gap-19pxr pl-24pxr pt-12pxr">
      <h2 className="fonts-recommendTitle">최근 검색어</h2>
      <section className="flex items-center justify-center gap-8pxr overflow-x-auto">
        {recentSearch.length === 0 ? (
          <p className="fonts-recommendSubtitle flex">최근 검색어가 존재하지 않습니다.</p>
        ) : (
          recentSearch.map((search) => (
            <div
              key={search.createdAt}
              className="flex h-36pxr w-auto items-center justify-center gap-12pxr rounded-searchBox border border-gray-2 px-16pxr">
              <span className="fonts-recommendSubtitle flex-1 whitespace-nowrap">{search.log}</span>
              <CloseIcon />
            </div>
          ))
        )}
      </section>
    </section>
  );
}
