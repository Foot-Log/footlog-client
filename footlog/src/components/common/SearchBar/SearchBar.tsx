import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  return (
    <section className="bg-gray_3 rounded-searchBar flex h-[42px] w-[307px] items-center gap-[10.3px] px-[11px] pr-[5px]">
      <SearchIcon />
      <input className="w-5/6 bg-transparent" />
    </section>
  );
}
