'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import RegionCard from '@components/home/search/RegionCard';
import LocationCard from '@components/home/search/LocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';
import { RegionCardDataTypes } from 'types/home/search/SearchTypes';
import { locationData } from '@core/locationData';

export default function page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  const filteredCourses = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const filteredLocations = locationData.filter((location: RegionCardDataTypes) =>
    location.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

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
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput ? (
          <>
            {filteredLocations.length > 0 && (
              <section className="mb-24pxr flex flex-col gap-24pxr">
                {filteredLocations.map((location) => (
                  <RegionCard key={location.id} location={location} searchInput={searchInput} />
                ))}
              </section>
            )}
            {filteredCourses.length > 0 ? (
              <section className="flex flex-col gap-24pxr">
                {filteredCourses.map((course) => (
                  <LocationCard key={course.id} course={course} searchInput={searchInput} />
                ))}
              </section>
            ) : (
              <p className="fonts-recommendSubtitle mt-289pxr flex justify-center">
                {searchInput}의 검색 결과가 존재하지 않습니다.
              </p>
            )}
          </>
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
