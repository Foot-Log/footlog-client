import { SearchIcon } from '@public/icon';

export default function ClickedSearchBar() {
  return (
    <section className="bg-gray_3 flex h-42pxr w-307pxr items-center gap-10pxr rounded-searchBar px-11pxr pr-5pxr">
      <input className="w-5/6 bg-transparent" />
      <SearchIcon />
    </section>
  );
}
