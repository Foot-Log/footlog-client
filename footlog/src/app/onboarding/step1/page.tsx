'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MountainIcon, OceanIcon, CaveIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();
  const keywords = ['산', '바다', '동굴'];
  const images = [MountainIcon, OceanIcon, CaveIcon];
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]); // 선택한 키워드를 배열로 관리

  const isOnboardingBtnDisabled = selectedKeywords.length === 0;

  return (
    <main className="w-full h-full flex flex-col relative pt-8 px-6">
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
      <OnboardingKeywords keywords={keywords} images={images} />
      <OnboardingBtn
        text="다음"
        $disabled={isOnboardingBtnDisabled}
        handleOnboardingBtn={() => router.push('/onboarding/step2')}
      />
    </main>
  );
}
