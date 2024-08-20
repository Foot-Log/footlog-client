interface OnboardingBtnProps {
  text: string;
  $disabled: boolean;
  handleOnboardingBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled, handleOnboardingBtn } = props;

  const color = $disabled ? 'bg-gray_2' : 'bg-main-green';
  const cursor = $disabled ? 'not-allowed' : 'pointer';

  return (
    <button
      type="button"
      className={`bottom-20pxr h-48pxr w-345pxr absolute flex items-center justify-center rounded-xl ${color} ${cursor}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
