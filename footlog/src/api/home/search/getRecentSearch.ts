import api from 'api/api';
import { Response } from 'types/common/Response';
import { SearchLogDtoDataTypes } from 'types/home/search/SearchTypes';

export async function getRecentSearch(): Promise<Response<SearchLogDtoDataTypes[]>> {
  const { data } = await api.get(`/search/recent`);
  return data;
}
