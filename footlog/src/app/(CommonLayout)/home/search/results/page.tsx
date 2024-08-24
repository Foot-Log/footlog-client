'use client';
import { useState, useEffect } from 'react';
import SearchHeader from '@components/home/search/SearchHeader';
import LocationCard from '@components/home/search/LocationCard';
import BigLocationCard from '@components/home/search/BigLocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';

export default function page() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<CourseDetailsDataTypes[]>([]);
  const [showBigCards, setShowBigCards] = useState(true);

  // 쿼리 파라미터에서 초기 검색어 가져오기
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (query) {
      setSearchInput(decodeURIComponent(query)); // 쿼리 파라미터에서 검색어 가져오기
      const filtered = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
        course.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredLocations(filtered);
    }
  }, [window.location.search]);

  // searchInput이 변경될 때마다 필터링된 결과 업데이트
  useEffect(() => {
    const filtered = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
      course.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredLocations(filtered);
  }, [searchInput]); // searchInput을 의존성으로 추가

  // 엔터 키를 눌렀을 때 호출되는 함수
  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowBigCards(true); // BigLocationCard를 보여주도록 상태 변경
    }
  };

  const handleSearch = () => {
    setShowBigCards(true); // 돋보기 버튼 클릭 시 BigLocationCard 표시
  };

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onKeyDown={handleEnterKey} // onKeyDown 이벤트 전달
        onSearch={handleSearch}
      />
      <section className="mt-80pxr flex flex-col overflow-y-auto">
        {showBigCards ? ( // showBigCards가 true일 때 BigLocationCard 출력
          filteredLocations.length > 0 ? (
            <section className="flex flex-col">
              {filteredLocations.map((course) => (
                <section key={course.id}>
                  <BigLocationCard course={course} searchInput={searchInput} />
                  <div className="my-20pxr h-8pxr w-full bg-gray-1" />
                </section>
              ))}
            </section>
          ) : (
            <p className="fonts-recommendSubtitle mt-289pxr flex justify-center">
              `'{searchInput}'의 검색 결과가 존재하지 않습니다.`
            </p>
          )
        ) : (
          // 입력 중일 때 LocationCard 출력
          <section className="flex flex-col gap-24pxr">
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
