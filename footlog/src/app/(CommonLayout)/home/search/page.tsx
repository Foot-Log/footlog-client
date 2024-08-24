'use client';
import { useState } from 'react';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';
import { LocationDataTypes } from 'types/common/CommonTypes';
import { locationData } from '@core/locationData';

export default function page() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput ? ( // searchInput이 없을 때 즉 입력창에 입력 안했을 때
          <div>검색 중: {searchInput}</div> // 검색 중일 때 보여줄 컴포넌트
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
