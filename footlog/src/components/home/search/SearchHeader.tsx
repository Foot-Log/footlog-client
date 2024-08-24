'use client';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 컴포넌트가 렌더링될 때 input에 포커스
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  function handleBackBtn() {
    router.back();
  }


  return (
    <section className="absolute top-0 flex w-full items-center justify-around gap-20pxr bg-white pb-16pxr pl-24pxr pr-20pxr pt-9pxr">
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
