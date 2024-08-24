'use client';
import { useState } from 'react';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import LocationCard from '@components/home/search/LocationCard';
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
import { courseDetailsData } from '@core/courseDetailsData';

export default function page() {
  const [searchInput, setSearchInput] = useState('');

  const filteredLocations = courseDetailsData.filter((course: CourseDetailsDataTypes) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput ? (
          filteredLocations.length > 0 ? (
            <section className="flex flex-col gap-24pxr">
              {filteredLocations.map((course) => (
                <LocationCard key={course.id} course={course} searchInput={searchInput} /> // location 객체 전체를 전달
              ))}
            </section>
          ) : (
            <></>
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
