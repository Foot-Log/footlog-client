// 위치 검색 결과
export interface CityRegionsDtoDataTypes {
  sigunguCode: number;
  areaCode: number;
  sigunguName: string;
}

export interface RegionCardProps {
  location: CityRegionsDtoDataTypes;
  searchInput: string;
}

export interface SearchLogDtoDataTypes {
  keyword: string;
}
