'use client';
import { useState, useEffect } from 'react';
import SearchHeader from '@components/home/search/SearchHeader';
import BigLocationCard from '@components/home/search/BigLocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';

export default function page() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<CourseDetailsDataTypes[]>([]);

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

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className="mt-80pxr flex flex-col overflow-y-auto">
        {searchInput && filteredLocations.length > 0 ? (
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
            {searchInput ? `'${searchInput}'의 검색 결과가 존재하지 않습니다.` : '검색어를 입력해 주세요.'}
          </p>
        )}
      </section>
    </main>
  );
}
