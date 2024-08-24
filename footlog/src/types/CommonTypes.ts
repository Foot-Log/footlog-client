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

// 지역명, 최근 검색어, 인기 코스
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

export interface BlogPostingDataTypes {
  writer: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

// 코스 검색 결과 LocationCard
export interface LocationCardProps {
  course: CourseDetailsDataTypes;
  searchInput: string;
}
