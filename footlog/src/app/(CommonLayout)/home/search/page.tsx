'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import LocationCard from '@components/home/search/LocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';

export default function Page() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const filteredLocations = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      router.push(`search/results?query=${encodeURIComponent(searchInput)}`);
    }
  };

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
        onSearch={handleSearch} // 검색 함수 전달
      />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput ? (
          filteredLocations.length > 0 ? (
            <section className="flex flex-col gap-24pxr">
              {filteredLocations.map((course) => (
                <LocationCard key={course.id} course={course} searchInput={searchInput} />
              ))}
            </section>
          ) : (
            <p className="fonts-recommendSubtitle flex justify-center">
              `'{searchInput}'의 검색 결과가 존재하지 않습니다.`
            </p>
          )
        ) : (
          <>
            <RecentSearchContainer />
            <RecentCourseContainer />
            <PopularContainer />
          </>
        )}
      </section>
    </main>
  );
}
