import { HomeLogoIcon } from '@public/icon';
import SearchBar from '@components/common/SearchBar/SearchBar';

export default function HomeHeader() {
  return (
    <section className="gap-12.47pxr px-20pxr pb-16pxr pt-9pxr absolute top-0 flex w-full items-center justify-around bg-white">
      <HomeLogoIcon />
      <SearchBar />
    </section>
  );
}
