import { HomeLogoIcon } from '@public/icon';
import SearchBar from '@components/common/SearchBar/SearchBar';

export default function HomeHeader() {
  return (
    <section className="absolute top-0 flex h-[67px] w-full items-center justify-around gap-[12.47px] bg-white px-5 pt-[9px]">
      <HomeLogoIcon />
      <SearchBar />
    </section>
  );
}
