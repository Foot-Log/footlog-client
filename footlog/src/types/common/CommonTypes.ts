export interface NavBarIconsDataTypes {
  name: string;
  path: string;
  defaultIcon: React.FC;
  activeIcon: React.FC;
}

// 코스 검색 결과 LocationCard
export interface LocationCardProps {
  course: CourseResponseDtoDataTypes;
  searchInput?: string;
}

export interface CourseResponseDtoDataTypes {
  course_id: number;
  image: string;
  area: string;
  name: string;
  isSave: boolean;
}

export interface CoursesDataTypes {
  courses: CourseResponseDtoDataTypes[];
}
