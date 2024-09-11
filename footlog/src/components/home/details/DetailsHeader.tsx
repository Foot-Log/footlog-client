import { useRouter } from 'next/navigation';
import { LeftArrowIcon, SaveOutlineGreenIcon, SaveFilledGreenIcon } from '@public/icon';

interface DetailsHeaderProps {
  title: string;
  isSaved: boolean;
  onClick: () => void;
}

export default function DetailsHeader(props: DetailsHeaderProps) {
  const { title, isSaved, onClick } = props;
  const router = useRouter();

  function handleBackBtn() {
    router.back(); // 이전 페이지로 돌아가기
  }

  return (
    <section className="fixed top-0 z-20 flex h-68pxr w-full items-center justify-between bg-white px-24pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <p className="fonts-recommendTitle">{title}</p>
      <button type="button" className="cursor-pointer" onClick={onClick}>
        {isSaved ? <SaveFilledGreenIcon /> : <SaveOutlineGreenIcon />}
      </button>
    </section>
  );
}
