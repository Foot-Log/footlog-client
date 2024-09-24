'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import { filterCourses, filterLocations } from '@utils/filterData';
import SearchedResults from '@components/home/search/results/SearchedResults';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';
import useGetSearchResult from '@hooks/home/search/useGetSearchResult';
import useGetCityRegions from '@hooks/home/search/useGetCityRegions';
import { useInfiniteScroll } from '@hooks/common/useInfiniteScroll';
import { MoonLoader } from 'react-spinners';

export default function Page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [showBigCards, setShowBigCards] = useState(true);

  const { data: coursesData } = useGetRegionalCourse(0);
  const { data: searchData } = useGetSearchResult(searchInput);
  const { data: cityRegions } = useGetCityRegions();

  if (!coursesData || !cityRegions) {
    return <></>;
  }

  const [_, setFilteredCourses] = useState<CourseResponseDtoDataTypes[]>([]);
  const filteredLocations = filterLocations(cityRegions.data, searchInput);

  // 쿼리 파라미터에서 초기 검색어 가져오기
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (query) {
      const decodedQuery = decodeURIComponent(query);
      setSearchInput(decodedQuery);
      setShowBigCards(true);
    } else {
      setShowBigCards(false);
    }
  }, [window.location.search]);

  // searchInput이 변경될 때마다 필터링된 결과 업데이트
  useEffect(() => {
    const filtered = filterCourses(coursesData?.data, searchInput);
    setFilteredCourses(filtered);

    const query = new URLSearchParams(window.location.search).get('query');
    if (searchInput.trim() === '') {
      setShowBigCards(true);
    } else if (query && query !== searchInput) {
      setShowBigCards(false);
    } else {
      setShowBigCards(true); // searchInput이 쿼리와 같거나 입력 중일 때는 true로 설정
    }
  }, [searchInput, window.location.search]);

  // 엔터 키를 눌렀을 때 호출되는 함수
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (searchInput.trim()) {
        setShowBigCards(true);
        router.push(`results?query=${encodeURIComponent(searchInput)}`);
      }
    }
  };

  // 돋보기 버튼 클릭 시 호출되는 함수
  const handleSearch = () => {
    setShowBigCards(true);
    router.push(`results?query=${encodeURIComponent(searchInput)}`);
  };

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onKeyDown={handleEnterKey} // onKeyDown 이벤트 전달
        onSearch={handleSearch}
        shouldFocus={false}
      />
      <SearchedResults
        filteredCourses={searchData?.data || []}
        filteredLocations={filteredLocations}
        searchInput={searchInput}
        showBigCards={showBigCards}
      />
    </main>
  );
}
