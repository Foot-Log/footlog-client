'use client';
import { useState } from 'react';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import LocationCard from '@components/home/search/LocationCard';
import { LocationDataTypes } from 'types/common/CommonTypes';
import { locationData } from '@core/locationData';

export default function page() {
  const [searchInput, setSearchInput] = useState('');

  const filteredLocations = locationData.filter((location: LocationDataTypes) =>
    location.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput ? (
          filteredLocations.length > 0 ? (
            <div>
              {filteredLocations.map((location) => (
                <LocationCard key={location.id} location={location} /> // location 객체 전체를 전달
              ))}
            </div>
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
