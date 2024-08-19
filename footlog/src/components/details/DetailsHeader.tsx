import { useRouter } from 'next/navigation';
import { LeftArrowIcon, SaveOutlineGreenIcon, SaveFilledGreenIcon } from '@public/icon';

interface DetailsHeaderProps {
  title: string;
  isSaved: boolean;
}

export default function DetailsHeader(props: DetailsHeaderProps) {
  const { title, isSaved } = props;
  const router = useRouter();

  function handleBackBtn() {
    router.push('/home');
  }

  return (
    <section className="h-68pxr px-24pxr absolute top-0 flex w-full items-center justify-between bg-white">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <p className="fonts-recommendTitle">{title}</p>
      {isSaved == true ? <SaveFilledGreenIcon /> : <SaveOutlineGreenIcon />}
    </section>
  );
}
