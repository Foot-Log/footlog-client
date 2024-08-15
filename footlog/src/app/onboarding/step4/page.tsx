'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';
import { MoonLoader } from 'react-spinners';

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

  // 일단 3초 후 바뀌게끔 해놨는데 나중에 api 연결로 바꿀게!
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
      <div className="w-full flex justify-center items-center pt-20">
        {isOnboardingBtnDisabled ? (
          <MoonLoader color="#05cbbe" size={70} speedMultiplier={0.5} />
        ) : (
          <CheckIcon /> // 버튼이 활성화되면 CheckIcon 출력
        )}
      </div>
      <OnboardingBtn
        text="시작하기"
        $disabled={isOnboardingBtnDisabled}
        handleOnboardingBtn={() => router.push('/home')}
      />
    </main>
  );
}
