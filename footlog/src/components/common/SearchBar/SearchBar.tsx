import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  return (
    <section className="gap-10.3pxr bg-gray-3 flex h-42pxr w-307pxr items-center rounded-searchBar px-11pxr pr-5pxr">
      <SearchIcon />
      <input className="w-5/6 bg-transparent" />
    </section>
  );
}
