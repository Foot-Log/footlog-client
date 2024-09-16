'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/common/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import SearchingResults from '@components/home/search/SearchingResults';
import { courseDetailsData } from '@core/courseDetailsData';
import { locationData } from '@core/locationData';
import { filterCourses, filterLocations } from '@utils/filterData';
import useGetRecentSearch from '@hooks/home/search/useGetRecentSearch';

export default function page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const filteredCourses = filterCourses(courseDetailsData, searchInput);
  const filteredLocations = filterLocations(locationData, searchInput);

  const { data: RecentSearch } = useGetRecentSearch();

  // 엔터 키를 눌렀을 때 호출되는 함수
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      router.push(`search/results?query=${encodeURIComponent(searchInput)}`);
    }
  };

  // 돋보기 버튼 클릭 시 호출되는 함수
  const handleSearch = () => {
    if (searchInput.trim()) {
      router.push(`search/results?query=${encodeURIComponent(searchInput)}`);
    }
  };

  if (!RecentSearch) {
    return <></>;
  }

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onKeyDown={handleEnterKey}
        onSearch={handleSearch}
        shouldFocus={true}
      />
      <section className="mt-67pxr flex flex-col overflow-y-auto">
        {searchInput ? (
          <SearchingResults
            filteredCourses={filteredCourses}
            filteredLocations={filteredLocations}
            searchInput={searchInput}
          />
        ) : (
          <>
            <RecentSearchContainer recentSearchData={RecentSearch.data} />
            {/*<RecentCourseContainer />*/}
            <PopularContainer />
          </>
        )}
      </section>
    </main>
  );
}
