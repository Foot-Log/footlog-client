interface OnboardingBtnProps {
  text: string;
  $disabled: boolean;
  handleOnboardingBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled, handleOnboardingBtn } = props;

  const color = $disabled ? 'bg-btn-gray' : 'bg-main-green';
  const cursor = $disabled ? 'not-allowed' : 'pointer';

  return (
    <button
      type="button"
      className={`absolute bottom-5 flex h-12 w-[345px] items-center justify-center rounded-xl ${color} ${cursor}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
