'use client';
import { useRouter } from 'next/navigation';
import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  const router = useRouter();

  const handleInputClick = () => {
    router.push('/home/search');
  };

  return (
    <section className="flex h-42pxr w-307pxr items-center gap-10pxr rounded-searchBar bg-gray-3 pl-12pxr pr-5pxr">
      <SearchIcon />
      <input
        className="fonts-searchPlaceholder w-5/6 bg-transparent"
        onClick={handleInputClick}
        placeholder="코스를 검색해 보세요!"
      />
    </section>
  );
}
