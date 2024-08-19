import { SearchIcon } from '@public/icon';

export default function SearchBar() {
  return (
    <section className="h-42pxr w-307pxr gap-10.3pxr px-11pxr pr-5pxr flex items-center rounded-searchBar bg-gray_3">
      <SearchIcon />
      <input className="w-5/6 bg-transparent" />
    </section>
  );
}
