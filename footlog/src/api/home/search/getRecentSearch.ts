import api from 'api/api';
import { Response } from 'types/common/Response';

export interface SearchLogDtoDataTypes {
  log: string;
  createdAt: string;
}

export async function getRecentSearch(): Promise<Response<SearchLogDtoDataTypes[]>> {
  const { data } = await api.get(`/search/recent`);
  return data;
}
