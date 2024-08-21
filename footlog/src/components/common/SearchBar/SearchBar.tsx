'use client';
import { useRouter } from 'next/navigation';
import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  const router = useRouter();

  const handleInputClick = () => {
    router.push('/home/search');
  };

  return (
    <section className="bg-gray_3 flex h-42pxr w-307pxr items-center gap-10pxr rounded-searchBar px-11pxr pr-5pxr">
      <SearchIcon />
      <input className="w-5/6 bg-transparent" onClick={handleInputClick} />
    </section>
  );
}
