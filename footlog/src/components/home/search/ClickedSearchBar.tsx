import { SearchIcon } from '@public/icon';

export default function ClickedSearchBar() {
  return (
    <section className="bg-gray_3 flex h-42pxr w-307pxr items-center justify-between gap-16pxr rounded-searchBar pl-20pxr pr-16pxr">
      <input className="fonts-searchPlaceholder w-full bg-transparent" placeholder="코스를 검색해 보세요!" />
      <SearchIcon />
    </section>
  );
}
