'use client';
import { useEffect, useRef } from 'react';
import { SearchIcon } from '@public/icon';

export default function ClickedSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 컴포넌트가 렌더링될 때 input에 포커스
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <section className="bg-gray_3 flex h-42pxr w-307pxr items-center justify-between gap-16pxr rounded-searchBar pl-20pxr pr-16pxr">
      <input
        ref={inputRef}
        className="fonts-searchPlaceholder w-full bg-transparent"
        placeholder="코스를 검색해 보세요!"
      />
      <SearchIcon />
    </section>
  );
}
