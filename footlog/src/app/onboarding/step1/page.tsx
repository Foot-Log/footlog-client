'use client';
import { useRouter } from 'next/navigation';
import { MountainIcon, OceanIcon, CaveIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();
  const keywords = ['산', '바다', '동굴'];
  const images = [MountainIcon, OceanIcon, CaveIcon];

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
      <OnboardingBtn text="다음" isActive={false} handleFooterBtn={() => router.push('/search')} />
    </main>
  );
}
