'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import LocationCard from '@components/home/search/LocationCard';
import BigLocationCard from '@components/home/search/BigLocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';

export default function Page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<CourseDetailsDataTypes[]>([]);
  const [showBigCards, setShowBigCards] = useState(true);

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
    const filtered = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
      course.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredLocations(filtered);

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
      <section className="mt-59pxr flex flex-col overflow-y-auto">
        {showBigCards ? ( // showBigCards가 true일 때 BigLocationCard 출력
          filteredLocations.length > 0 ? (
            <section className="flex flex-col">
              {filteredLocations.map((course) => (
                <section key={course.id}>
                  <div className="mb-20pxr h-8pxr w-full bg-gray-1" />
                  <BigLocationCard course={course} searchInput={searchInput} />
                </section>
              ))}
            </section>
          ) : (
            <p className="fonts-recommendSubtitle mt-289pxr flex justify-center">
              {searchInput}의 검색 결과가 존재하지 않습니다.
            </p>
          )
        ) : (
          // 입력 중일 때 LocationCard 출력
          <section className="mt-12pxr flex flex-col gap-24pxr">
            {filteredLocations.map((course) => (
              <section key={course.id}>
                <LocationCard course={course} searchInput={searchInput} />
              </section>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
