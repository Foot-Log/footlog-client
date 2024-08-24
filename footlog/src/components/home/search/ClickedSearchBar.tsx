'use client';
import { useEffect, useRef } from 'react';
import { SearchIcon } from '@public/icon';
import { LocationDataTypes } from 'types/common/CommonTypes';
import { locationData } from '@core/locationData';

interface ClickedSearchBarProps {
  onSearchChange: (value: string) => void;
}

export default function ClickedSearchBar(props: ClickedSearchBarProps) {
  const { onSearchChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 컴포넌트가 렌더링될 때 input에 포커스
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value); // 입력값이 변경될 때 부모에 알림
  };

  return (
    <section className="rounded-clickedSearchBar flex h-42pxr w-317pxr items-center justify-between gap-16pxr border border-gray-8 bg-white pl-20pxr pr-16pxr">
      <input
        ref={inputRef}
        className="fonts-searchPlaceholder w-full bg-transparent"
        placeholder="코스를 검색해 보세요!"
        onChange={handleInputChange}
      />
      <SearchIcon />
    </section>
  );
}
