'use client';
import Link from 'next/link';
import { HomeLogoIcon, SearchIcon } from '@public/icon';

export default function MainSearchHeader() {
  return (
    <section className="absolute top-0 flex w-full items-center justify-around gap-12pxr bg-white px-20pxr pb-16pxr pt-9pxr">
      <HomeLogoIcon />
      <Link
        href="/home/search"
        className="flex h-42pxr w-307pxr items-center gap-10pxr rounded-searchBar bg-gray-3 pl-12pxr pr-5pxr">
        <SearchIcon />
        <input
          className="fonts-searchPlaceholder w-5/6 bg-transparent text-gray-4"
          placeholder="코스를 검색해 보세요!"
        />
      </Link>
    </section>
  );
}
