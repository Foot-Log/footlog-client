import { HomeLogoIcon } from '@public/icon';
import SearchBar from '@components/common/SearchBar/SearchBar';

export default function MainSearchHeader() {
  return (
    <section className="absolute top-0 flex w-full items-center justify-around gap-12pxr bg-white px-20pxr pb-16pxr pt-9pxr">
      <HomeLogoIcon />
      <SearchBar />
    </section>
  );
}
