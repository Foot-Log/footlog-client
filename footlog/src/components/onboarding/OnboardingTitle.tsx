import { ReactNode } from 'react';

interface OnboardingTitleProps {
  number?: number;
  text: ReactNode; // 줄바꿈 때문에 text를 JSX 요소로 사용하기 위함
}

export default function OnboardingTitle(props: OnboardingTitleProps) {
  const { number, text } = props;

  return (
    <section className="mb-56pxr ml-8pxr mt-88pxr gap-11pxr flex flex-col items-start">
      <p className="fonts-onboardingNumber flex">{number}</p>
      <p className="fonts-onboardingQuestion flex">{text}</p>
    </section>
  );
}
