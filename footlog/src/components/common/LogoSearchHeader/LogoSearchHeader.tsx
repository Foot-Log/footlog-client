import { HomeLogoIcon } from '@public/icon';
import SearchBar from '@components/common/SearchBar/SearchBar';

export default function LogoSearchHeader() {
  return (
    <section className="gap-12.47pxr absolute top-0 flex w-full items-center justify-around bg-white px-20pxr pb-16pxr pt-9pxr">
      <HomeLogoIcon />
      <SearchBar />
    </section>
  );
}
