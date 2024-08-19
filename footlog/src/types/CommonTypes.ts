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
export interface RecommendCoursesDataTypes {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  subtitle: string;
  isSaved: boolean;
}

export interface RegionsDataTypes {
  id: number;
  name: string;
}

export interface CourseDetailsDataTypes {
  id: number;
  title: string;
  isSaved: boolean;
  imgSrc: StaticImageData;
  description: string;
  location: string;
  price: string;
  time: string;
  call: string;
  site: string;
  isComplete: boolean;
}
