import { ReactNode } from 'react';

interface OnboardingTitleProps {
  number: number;
  text: ReactNode; // 줄바꿈 때문에 text를 JSX 요소로 사용하기 위함
}

export default function OnboardingTitle(props: OnboardingTitleProps) {
  const { number, text } = props;

  return (
    <section className="flex flex-col items-start gap-[11px] mt-[88px] ml-2 mb-14">
      <p className="flex fonts-onboardingNumber">{number}</p>
      <p className="flex fonts-onboardingQuestion">{text}</p>
    </section>
  );
}
