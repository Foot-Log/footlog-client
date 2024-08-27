// 위치 검색 결과 RegionCard
export interface RegionCardDataTypes {
  id: number;
  title: string;
  subtitle?: string;
}

export interface RegionCardProps {
  location: RegionCardDataTypes;
  searchInput: string;
}