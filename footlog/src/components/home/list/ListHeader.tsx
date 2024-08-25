import { useRouter } from 'next/navigation';

import { LeftArrowIcon } from '@public/icon';

interface ListHeaderProps {
  title: string;
}

export default function ListHeader(props: ListHeaderProps) {
  const { title } = props;
  const router = useRouter();

  function handleBackBtn() {
    router.back();
  }

  return (
    <section className="fixed top-0 z-20 flex h-68pxr w-full items-center gap-20pxr bg-white pl-24pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <h2 className="font-mypageTitle">{title}</h2>
    </section>
  );
}
