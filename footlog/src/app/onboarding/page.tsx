'use client';
import { useRouter } from 'next/navigation';
import {
  MountainIcon,
  OceanIcon,
  CaveIcon,
  RiverIcon,
  TrailIcon,
  WaterfallIcon,
  HistoricSiteIcon,
  VolcanoIcon,
  CampingIcon,
  LeftArrowIcon,
  CheckIcon,
} from '@public/icon';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';

export default function page() {
  const router = useRouter();

  return (
    <main className="w-full h-full overflow-y-scroll">
      <OnboardingBtn text="다음" isActive={false} handleFooterBtn={() => router.push('/search')} />
    </main>
  );
}
