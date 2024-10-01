import { useRouter } from 'next/navigation';
import { LeftArrowIcon, SaveOutlineGreenIcon, SaveFilledGreenIcon } from '@public/icon';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';

interface DetailsHeaderProps {
  title: string;
  isSaved: boolean;
  onClick: () => void;
  onBackClick: () => void;
}

export default function DetailsHeader(props: DetailsHeaderProps) {
  const { title, isSaved, onClick, onBackClick } = props;
  const router = useRouter();
  const { refetch: refetchRecentCourse } = useGetRecentCourse();

  const handleBackBtn = async () => {
    onBackClick();
    await Promise.all([refetchRecentCourse()]);
    router.back();
  };

  return (
    <section className="absolute top-0 z-20 flex h-68pxr w-full items-center justify-between bg-white px-24pxr">
      <button type="button" className="cursor-pointer pr-15pxr" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <p className="fonts-recommendTitle">{title}</p>
      <button type="button" className="cursor-pointer px-15pxr" onClick={onClick}>
        {isSaved ? <SaveFilledGreenIcon /> : <SaveOutlineGreenIcon />}
      </button>
    </section>
  );
}
