'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RiverIcon, TrailIcon, WaterfallIcon, LeftArrowIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();
  const keywords = ['강/하천', '산책로', '계곡/폭포'];
  const images = [RiverIcon, TrailIcon, WaterfallIcon];
  const [selectedKeywords, setSelectedKeywords] = useState('');

  const isOnboardingBtnDisabled = selectedKeywords === '';

  return (
    <main className="w-full h-full flex flex-col relative pt-2.5 px-6">
      <LeftArrowIcon />
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
      <OnboardingKeywords keywords={keywords} images={images} />
      <OnboardingBtn
        text="다음"
        $disabled={isOnboardingBtnDisabled}
        handleOnboardingBtn={() => router.push('/onboarding/step3')}
      />
    </main>
  );
}
