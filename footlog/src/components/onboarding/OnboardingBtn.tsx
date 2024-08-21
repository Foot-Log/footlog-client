interface OnboardingBtnProps {
  text: string;
  $disabled: boolean;
  handleOnboardingBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled, handleOnboardingBtn } = props;

  const color = $disabled ? 'bg-gray-2' : 'bg-main-green';
  const cursor = $disabled ? 'not-allowed' : 'pointer';

  return (
    <button
      type="button"
      className={`absolute bottom-20pxr flex h-48pxr w-345pxr items-center justify-center rounded-xl ${color} ${cursor}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
