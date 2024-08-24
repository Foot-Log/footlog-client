'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LeftArrowIcon, SearchIcon } from '@public/icon';

interface SearchHeaderProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSearch: () => void;
  shouldFocus: boolean;
}

export default function SearchHeader(props: SearchHeaderProps) {
  const { searchInput, setSearchInput, onKeyDown, onSearch, shouldFocus = false } = props;
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && shouldFocus) {
      inputRef.current.focus(); // shouldFocus가 true일 때만 포커스
    }
  }, [shouldFocus]); // shouldFocus가 변경될 때마다 실행

  function handleBackBtn() {
    router.back();
  }

  return (
    <section className="fixed z-10 flex w-full items-center justify-around gap-20pxr bg-white pb-16pxr pl-24pxr pr-20pxr pt-9pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <section className="rounded-clickedSearchBar flex h-42pxr w-317pxr items-center justify-between gap-16pxr border border-gray-8 bg-white pl-20pxr pr-16pxr">
        <input
          ref={inputRef}
          className="fonts-searchPlaceholder w-full bg-transparent"
          placeholder="코스를 검색해 보세요!"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // input 변화 감지
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          <SearchIcon />
        </button>
      </section>
    </section>
  );
}
