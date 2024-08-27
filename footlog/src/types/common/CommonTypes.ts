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

// 코스 검색 결과 LocationCard
import { CourseDetailsDataTypes } from 'types/home/details/DetailsTypes';
export interface LocationCardProps {
  course: CourseDetailsDataTypes;
  searchInput: string;
}