'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/common/RecentCourseContainer/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import SearchingResults from '@components/home/search/SearchingResults';
import { filterCourses, filterLocations } from '@utils/filterData';
import useGetRecentSearch from '@hooks/home/search/useGetRecentSearch';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';
import useGetCityRegions from '@hooks/home/search/useGetCityRegions';

export default function page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  const { data: recentSearch, refetch: refetchRecentSearch } = useGetRecentSearch();
  const { data: coursesData } = useGetRegionalCourse(0);
  const { data: popularCourses } = useGetPopularCourse();
  const { data: recentCourses, refetch: refetchRecentCourses } = useGetRecentCourse();
  const { data: cityRegions } = useGetCityRegions();

  useEffect(() => {
    refetchRecentSearch();
    refetchRecentCourses();
  }, []);

  if (!recentSearch || !coursesData || !popularCourses || !recentCourses || !cityRegions) {
    return <></>;
  }

  const filteredCourses = filterCourses(coursesData.data, searchInput);
  const filteredLocations = filterLocations(cityRegions.data, searchInput);

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
            <RecentSearchContainer recentSearch={recentSearch.data} />
            <RecentCourseContainer courses={recentCourses.data} />
            <PopularContainer courses={popularCourses.data} />
          </>
        )}
      </section>
    </main>
  );
}
