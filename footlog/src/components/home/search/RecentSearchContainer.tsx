import Link from 'next/link';
import { CloseIcon } from '@public/icon';
import { SearchLogDtoDataTypes } from 'types/home/search/SearchTypes';
import usePatchRecentSearch from '@hooks/home/search/usePatchRecentSearch';
import useGetRecentSearch from '@hooks/home/search/useGetRecentSearch';

export interface RecentSearchContainerProps {
  recentSearch: SearchLogDtoDataTypes[];
}

export default function RecentSearchContainer(props: RecentSearchContainerProps) {
  const { recentSearch } = props;
  const { mutate: patchRecentSearchMutate } = usePatchRecentSearch();
  const { refetch: refetchRecentSearch } = useGetRecentSearch();

  const handleDeleteClick = (keyword: string, e: React.MouseEvent) => {
    e.stopPropagation(); // 링크 클릭 이벤트 방지
    e.preventDefault(); // 기본 링크 동작 방지

    patchRecentSearchMutate(
      { keyword },
      {
        onSuccess: () => {
          refetchRecentSearch();
        },
      },
    );
  };

  return (
    <section className="flex w-full flex-col gap-19pxr pb-8pxr pl-24pxr pt-12pxr">
      <h2 className="fonts-recommendTitle">최근 검색어</h2>
      <section className="flex gap-8pxr overflow-x-auto">
        {recentSearch.length === 0 ? (
          <p className="fonts-recommendSubtitle flex">최근 검색어가 존재하지 않습니다.</p>
        ) : (
          recentSearch.map((search) => (
            <Link key={search.keyword} href={`search/results?query=${encodeURIComponent(search.keyword)}`} passHref>
              <div className="flex h-36pxr w-auto items-center justify-center gap-12pxr rounded-searchBox border border-gray-2 px-16pxr">
                <span className="fonts-recommendSubtitle flex-1 whitespace-nowrap">{search.keyword}</span>
                <button type="button" className="cursor-pointer" onClick={(e) => handleDeleteClick(search.keyword, e)}>
                  <CloseIcon />
                </button>
              </div>
            </Link>
          ))
        )}
      </section>
    </section>
  );
}
