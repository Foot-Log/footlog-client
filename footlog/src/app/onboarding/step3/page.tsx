'use client';
import { useRouter } from 'next/navigation';
import { HistoricSiteIcon, VolcanoIcon, CampingIcon, LeftArrowIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();
  const keywords = ['유적지', '특이 지형', '이색 체험'];
  const images = [HistoricSiteIcon, VolcanoIcon, CampingIcon];

  return (
    <main className="w-full h-full flex flex-col relative pt-2.5 px-6">
      <LeftArrowIcon />
      <OnboardingTitle
        number={3}
        text={
          <>
            다음 중 플로깅을 하면서
            <br />
            함께 즐기고 싶은 활동은?
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
