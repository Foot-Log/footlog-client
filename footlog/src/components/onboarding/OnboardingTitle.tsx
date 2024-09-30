import { ReactNode } from 'react';

interface OnboardingTitleProps {
  number?: number;
  text: ReactNode;
}

export default function OnboardingTitle(props: OnboardingTitleProps) {
  const { number, text } = props;

  return (
    <section className="mb-56pxr ml-8pxr mt-88pxr flex flex-col items-start gap-11pxr">
      <p className="fonts-onboardingNumber flex">{number}</p>
      <p className="fonts-onboardingQuestion flex">{text}</p>
    </section>
  );
}
