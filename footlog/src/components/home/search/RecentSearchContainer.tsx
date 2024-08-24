import { recentSearchData } from '@core/recentSearchData';
import { CloseIcon } from '@public/icon';

export default function RecentSearchContainer() {
  return (
    <section className="flex w-full flex-col gap-19pxr pt-12pxr">
      <h2 className="fonts-recommendTitle">최근 검색어</h2>
      <section className="flex gap-8pxr overflow-x-auto">
        {recentSearchData.map((search) => (
          <div
            key={search.id}
            className="rounded-searchBox flex h-36pxr w-auto items-center justify-center gap-12pxr border border-gray-2 px-16pxr">
            <span className="fonts-recommendSubtitle flex-1 whitespace-nowrap">{search.name}</span>
            <CloseIcon />
          </div>
        ))}
      </section>
    </section>
  );
}
