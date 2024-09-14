import api from 'api/api';
import { Response } from 'types/common/Response';

export interface AreaCodeDtoDataTypes {
  areaCode: number;
  areaName: string;
}

export async function getRegions(): Promise<Response<AreaCodeDtoDataTypes[]>> {
  const { data } = await api.get(`/course/area_code`);
  return data;
}
