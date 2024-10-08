'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LeftArrowIcon, SearchIcon } from '@public/icon';

interface SearchHeaderProps {
  searchInput: string;
  setSearchInput: (input: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSearch: () => void;
}

export default function SearchHeader(props: SearchHeaderProps) {
  const { searchInput, setSearchInput, onKeyDown, onSearch } = props;
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleBackBtn() {
    router.back();
  }

  return (
    <section className="absolute z-10 flex w-full items-center justify-around gap-20pxr bg-white pb-16pxr pl-24pxr pr-20pxr pt-9pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <section className="flex h-42pxr w-full items-center justify-between gap-16pxr rounded-clickedSearchBar border border-gray-8 bg-white pl-20pxr pr-16pxr">
        <input
          ref={inputRef}
          className="fonts-searchPlaceholder w-full bg-transparent text-gray-8 placeholder:text-gray-4"
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
