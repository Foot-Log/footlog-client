'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();
  const [isOnboardingBtnDisabled, setIsOnboardingBtnDisabled] = useState(true); // 초기값 true로 설정
  const [titleText, setTitleText] = useState(
    <>
      ㅇㅇ 님께서 좋아하실 만한
      <br />
      플로깅 코스를 찾고 있어요.
    </>,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOnboardingBtnDisabled(false); // 3초 후 버튼 활성화
      setTitleText(
        // 버튼 활성화 시 제목 변경
        <>
          선택하신 테마를 바탕으로
          <br />
          플로깅 코스를 추천해드릴게요.
        </>,
      );
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <main className="w-full h-full flex flex-col relative pt-[100px] px-6">
      <OnboardingTitle text={titleText} />
      <OnboardingBtn
        text="시작하기"
        $disabled={isOnboardingBtnDisabled}
        handleOnboardingBtn={() => router.push('/home')}
      />
    </main>
  );
}
