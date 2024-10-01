interface OnboardingBtnProps {
  text: string;
  $disabled: boolean;
  handleOnboardingBtn?: () => void;
}

export default function OnboardingBtn(props: OnboardingBtnProps) {
  const { text, $disabled, handleOnboardingBtn } = props;

  return (
    <button
      type="button"
      style={{ width: 'calc(100% - 48px)' }}
      className={`absolute bottom-20pxr h-48pxr items-center justify-center rounded-xl ${$disabled ? 'not-allowed bg-gray-2' : 'pointer bg-main-green'}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn text-white">{text}</p>
    </button>
  );
}
