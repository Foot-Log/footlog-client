import api from 'api/api';
import { Response } from 'types/common/Response';

export interface CityRegionsDtoDataTypes {
  sigunguCode: number;
  areaCode: number;
  sigunguName: string;
}

export async function getCityRegions(): Promise<Response<CityRegionsDtoDataTypes[]>> {
  const { data } = await api.get(`/search/sigungu_code`);
  return data;
}
