interface OnboardingBtnProps {
  text: string;
  isActive: boolean;
  handleFooterBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, isActive, handleFooterBtn } = props;

  const buttonColor = isActive ? 'bg-btn-green' : 'bg-btn-gray';

  return (
    <button
      type="button"
      className={`absolute flex items-center justify-center w-[345px] h-12 rounded-xl bottom-5 ${buttonColor}`}
      onClick={handleFooterBtn}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
