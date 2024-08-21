import { useRouter } from 'next/navigation';
import ClickedSearchBar from './ClickedSearchBar';
import { LeftArrowIcon } from '@public/icon';

export default function SearchHeader() {
  const router = useRouter();

  function handleBackBtn() {
    router.back();
  }

  return (
    <section className="gap-12.47pxr absolute top-0 flex w-full items-center justify-around bg-white px-20pxr pb-16pxr pt-9pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <ClickedSearchBar />
    </section>
  );
}
