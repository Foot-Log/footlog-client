// 위치 검색 결과
export interface CityRegionsDtoDataTypes {
  sigunguId: number;
  sigunguName: string;
  withArea: string;
}

export interface RegionCardProps {
  location: CityRegionsDtoDataTypes;
  searchInput: string;
}

export interface SearchLogDtoDataTypes {
  keyword: string;
}
