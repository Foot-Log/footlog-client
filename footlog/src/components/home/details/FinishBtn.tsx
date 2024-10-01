import { FlagIcon } from '@public/icon';

interface FinishBtnProps {
  isComplete: boolean;
  onClick?: () => void;
}

export default function FinishBtn(props: FinishBtnProps) {
  const { isComplete, onClick } = props;

  return (
    <section className="absolute bottom-0 h-88pxr w-full bg-white px-24pxr py-20pxr">
      <button
        type="button"
        className={`flex h-48pxr w-full items-center justify-center gap-12pxr rounded-xl ${isComplete ? 'not-allowed bg-gray-2' : 'pointer bg-main-green'}`}
        onClick={onClick}>
        {isComplete && <FlagIcon />}
        <p className="fonts-onboardingBtn text-white">{isComplete ? '완주 완료' : '완주하기'}</p>
      </button>
    </section>
  );
}
