import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  return (
    <section className="bg-gray2 rounded-searchBar flex h-[47px] w-[307px] items-center justify-items-center gap-[10.3px] pl-[11px] pr-[5px]">
      <SearchIcon />
      <input className="bg-transparent" />
    </section>
  );
}
