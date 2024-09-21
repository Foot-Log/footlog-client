import api from 'api/api';
import { Response } from 'types/common/Response';
import { CityRegionsDtoDataTypes } from 'types/home/search/SearchTypes';

export async function getCityRegions(): Promise<Response<CityRegionsDtoDataTypes[]>> {
  const { data } = await api.get(`/search/sigungu_code`);
  return data;
}
