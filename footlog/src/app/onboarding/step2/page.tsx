'use client';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import { LeftArrowIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';
import { secondOnboardingState } from '@recoil/atom';
import { onboardingIconsData } from '@core/onboardingIconsData';

export default function page() {
  const router = useRouter();
  const [selectedKeywords, setSelectedKeywords] = useRecoilState(secondOnboardingState);
  const currentIcons = onboardingIconsData.slice(3, 6);

  function handleBackBtn() {
    router.back();
  }

  function handleKeywordSelect(keyword: string) {
    setSelectedKeywords((prev) => {
      if (prev.includes(keyword)) {
        return prev.filter((k) => k !== keyword);
      } else {
        if (prev.length < 2) {
          return [...prev, keyword];
        }
        return prev;
      }
    });
  }

  const isOnboardingBtnDisabled = selectedKeywords.length === 0;

  return (
    <main className="relative flex h-full w-full flex-col px-24pxr pt-10pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <OnboardingTitle
        number={2}
        text={
          <>
            다음 중 환경 정화가 필요하다고
            <br />
            생각하는 장소는?
            <br />
            (최대 2개 선택)
          </>
        }
      />
      <OnboardingKeywords
        selectedKeywords={selectedKeywords}
        onKeywordSelect={handleKeywordSelect}
        iconsData={currentIcons}
      />
      <OnboardingBtn
        text="다음"
        $disabled={isOnboardingBtnDisabled}
        handleOnboardingBtn={() => router.push('/onboarding/step3')}
      />
    </main>
  );
}
