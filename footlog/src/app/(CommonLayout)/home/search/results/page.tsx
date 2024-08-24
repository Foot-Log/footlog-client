'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchHeader from '@components/home/search/SearchHeader';
import BigLocationCard from '@components/home/search/BigLocationCard';
import { LocationDataTypes } from 'types/common/CommonTypes';
import { locationData } from '@core/locationData';

export default function page() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<LocationDataTypes[]>([]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('query');
    if (query) {
      setSearchInput(decodeURIComponent(query)); // 쿼리 파라미터에서 검색어 가져오기
      const filtered = locationData.filter((location: LocationDataTypes) =>
        location.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredLocations(filtered);
    }
  }, [window.location.search]);

  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        {searchInput && filteredLocations.length > 0 ? (
          <section className="flex flex-col gap-24pxr">
            {filteredLocations.map((location) => (
              <>
                <BigLocationCard key={location.id} location={location} searchInput={searchInput} />
                <div className="h-8pxr w-393pxr bg-gray-1" />
              </>
            ))}
          </section>
        ) : (
          <p>{searchInput ? `'${searchInput}'의 검색 결과가 존재하지 않습니다.` : '검색어를 입력해 주세요.'}</p>
        )}
      </section>
    </main>
  );
}
