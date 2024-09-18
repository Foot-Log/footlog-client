import api from 'api/api';
import { Response } from 'types/common/Response';
import { SearchLogDtoDataTypes } from 'types/home/search/SearchTypes';

export async function deleteRecentSearch(props: SearchLogDtoDataTypes): Promise<Response<any>> {
  const { keyword } = props;

  const { data } = await api.delete(`/search/delete/${keyword}`);
  return data;
}
