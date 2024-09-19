import { MoonLoader } from 'react-spinners';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import { ReactNode } from 'react';

interface LoadingPageProps {
  text: ReactNode;
}

export default function Loading(props: LoadingPageProps) {
  const { text } = props;

  return (
    <main className="relative flex h-full w-full flex-col items-center pt-100pxr">
      <section className="flex flex-col items-center gap-8pxr pt-12pxr">
        <OnboardingTitle text={text} />
        <MoonLoader color="#05cbbe" size={70} speedMultiplier={0.5} />
      </section>
    </main>
  );
}

// 사용 예시
const text = (
  <>
    사용자 정보를 가져오고 있습니다.
    <br />
    잠시만 기다려주세요...
  </>
);

// <Suspense fallback={<Loading text={text} />} /> 이런 식으로 사용
