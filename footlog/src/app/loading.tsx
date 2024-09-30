import { MoonLoader } from 'react-spinners';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import { ReactNode } from 'react';

interface LoadingPageProps {
  loadingText: ReactNode;
}

export default function Loading(props: LoadingPageProps) {
  const { loadingText } = props;

  return (
    <main className="relative flex h-full w-full flex-col items-center pt-100pxr">
      <section className="flex flex-col items-center gap-8pxr pt-12pxr">
        <OnboardingTitle text={loadingText} />
        <MoonLoader color="#05cbbe" size={70} speedMultiplier={0.5} />
      </section>
    </main>
  );
}
