'use client';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';
import { firstOnboardingState } from '@recoil/atom';
import { onboardingIconsData } from '@core/onboardingIconsData';

export default function page() {
  const router = useRouter();
  const [selectedKeywords, setSelectedKeywords] = useRecoilState(firstOnboardingState);
  const currentIcons = onboardingIconsData.slice(0, 3);

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
    <main className="relative flex h-full w-full flex-col px-6 pt-8">
      <OnboardingTitle
        number={1}
        text={
          <>
            다음 중 평소 선호하는
            <br />
            자연경관은?
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
        handleOnboardingBtn={() => router.push('/onboarding/step2')}
      />
    </main>
  );
}
