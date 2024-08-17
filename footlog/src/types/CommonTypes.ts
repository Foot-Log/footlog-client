export interface OnboardingIconsDataTypes {
  keyword: string;
  defaultIcon: React.FC;
  strokeIcon: React.FC;
}

export interface NavBarIconsDataTypes {
  name: string;
  path: string;
  defaultIcon: React.FC;
  activeIcon: React.FC;
}

import { StaticImageData } from 'next/image';

export interface RecommendCourseTypes {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  subtitle: string;
  isSaved: boolean;
}
