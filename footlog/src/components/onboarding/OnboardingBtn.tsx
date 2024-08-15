interface OnboardingBtnProps {
  text: string;
  $disabled: boolean;
  handleOnboardingBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled, handleOnboardingBtn } = props;

  const color = $disabled ? 'bg-btn-gray' : 'bg-btn-green';
  const cursor = $disabled ? 'not-allowed' : 'pointer';

  return (
    <button
      type="button"
      className={`absolute flex items-center justify-center w-[345px] h-12 rounded-xl bottom-5 ${color} ${cursor}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
