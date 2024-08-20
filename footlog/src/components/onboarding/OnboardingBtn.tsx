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
      className={`absolute bottom-20pxr flex h-48pxr w-345pxr items-center justify-center rounded-xl ${$disabled ? 'not-allowed bg-gray_2' : 'pointer bg-main-green'}`}
      onClick={() => {
        if (!$disabled && handleOnboardingBtn) {
          handleOnboardingBtn();
        }
      }}>
      <p className="fonts-onboardingBtn">{text}</p>
    </button>
  );
}
