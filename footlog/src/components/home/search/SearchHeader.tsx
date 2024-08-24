import { useRouter } from 'next/navigation';
import ClickedSearchBar from './ClickedSearchBar';
import { LeftArrowIcon } from '@public/icon';

export default function SearchHeader() {
  const router = useRouter();

  function handleBackBtn() {
    router.back();
  }

  return (
    <section className="absolute top-0 flex w-full items-center justify-around gap-20pxr bg-white px-20pxr pb-16pxr pt-9pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <ClickedSearchBar />
    </section>
  );
}
