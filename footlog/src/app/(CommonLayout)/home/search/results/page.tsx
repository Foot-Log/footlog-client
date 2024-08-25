'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import { filterCourses, filterLocations } from '@utils/filterData';
import SearchedResults from '@components/home/search/results/SearchedResults';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';
import { locationData } from '@core/locationData';

export default function Page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<CourseDetailsDataTypes[]>([]);
  const [showBigCards, setShowBigCards] = useState(true);
  const filteredLocations = filterLocations(locationData, searchInput);

  // 쿼리 파라미터에서 초기 검색어 가져오기
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (query) {
      const decodedQuery = decodeURIComponent(query);
      setSearchInput(decodedQuery);
      setShowBigCards(true); // 쿼리 파라미터가 있을 경우 BigLocationCard 표시
    } else {
      setShowBigCards(false); // 쿼리 파라미터가 없으면 BigLocationCard 숨김
    }
  }, [window.location.search]);

  // searchInput이 변경될 때마다 필터링된 결과 업데이트
  useEffect(() => {
    const filtered = filterCourses(courseDetailsData, searchInput);
    setFilteredCourses(filtered);

    const query = new URLSearchParams(window.location.search).get('query');
    if (searchInput.trim() === '') {
      setShowBigCards(true); // 입력이 없을 때는 BigLocationCard를 보여줌
    } else if (query && query !== searchInput) {
      setShowBigCards(false); // searchInput이 쿼리와 다를 때는 false로 설정
    } else {
      setShowBigCards(true); // searchInput이 쿼리와 같거나 입력 중일 때는 true로 설정
    }
  }, [searchInput, window.location.search]); // window.location.search도 의존성에 추가

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
        filteredCourses={filteredCourses}
        filteredLocations={filteredLocations}
        searchInput={searchInput}
        showBigCards={showBigCards}
      />
    </main>
  );
}
