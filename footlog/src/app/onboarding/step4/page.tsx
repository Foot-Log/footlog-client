'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';
import { MoonLoader } from 'react-spinners';
import useGetUserInfo from '@hooks/mypage/useGetUserInfo';

export default function page() {
  const router = useRouter();
  const [isOnboardingBtnDisabled, setIsOnboardingBtnDisabled] = useState(true);
  const { data: userInfo } = useGetUserInfo();
  const [titleText, setTitleText] = useState(
    <>
      ㅇㅇ 님께서 좋아하실 만한
      <br />
      플로깅 코스를 찾고 있어요.
    </>,
  );

  useEffect(() => {
    if (userInfo?.data?.nickname) {
      setTitleText(
        <>
          {userInfo.data.nickname} 님께서 좋아하실 만한
          <br />
          플로깅 코스를 찾고 있어요.
        </>,
      );
    }
  }, [userInfo]);

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
    <main className="relative flex h-full w-full flex-col px-24pxr pt-100pxr">
      <OnboardingTitle text={titleText} />
      <div className="flex w-full items-center justify-center pt-32pxr">
        {isOnboardingBtnDisabled ? (
          <MoonLoader color="#05CBBE" size={70} speedMultiplier={0.5} />
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
