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
  MountainStrokeIcon,
  OceanStrokeIcon,
  CaveStrokeIcon,
  RiverStrokeIcon,
  TrailStrokeIcon,
  WaterfallStrokeIcon,
  HistoricSiteStrokeIcon,
  VolcanoStrokeIcon,
  CampingStrokeIcon,
} from '@public/icon';
import { OnboardingIconsDataTypes } from 'types/onboarding/OnboardingTypes';

export const onboardingIconsData: OnboardingIconsDataTypes[] = [
  { keyword: '산', defaultIcon: MountainIcon, strokeIcon: MountainStrokeIcon },
  { keyword: '바다', defaultIcon: OceanIcon, strokeIcon: OceanStrokeIcon },
  { keyword: '동굴', defaultIcon: CaveIcon, strokeIcon: CaveStrokeIcon },
  { keyword: '강/하천', defaultIcon: RiverIcon, strokeIcon: RiverStrokeIcon },
  { keyword: '산책로', defaultIcon: TrailIcon, strokeIcon: TrailStrokeIcon },
  { keyword: '계곡/폭포', defaultIcon: WaterfallIcon, strokeIcon: WaterfallStrokeIcon },
  { keyword: '유적지', defaultIcon: HistoricSiteIcon, strokeIcon: HistoricSiteStrokeIcon },
  { keyword: '특이 지형', defaultIcon: VolcanoIcon, strokeIcon: VolcanoStrokeIcon },
  { keyword: '이색 체험', defaultIcon: CampingIcon, strokeIcon: CampingStrokeIcon },
];
