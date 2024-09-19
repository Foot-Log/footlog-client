import api from 'api/api';
import { Response } from 'types/common/Response';
import { SearchLogDtoDataTypes } from 'types/home/search/SearchTypes';

export async function patchRecentSearch(props: SearchLogDtoDataTypes): Promise<Response<any>> {
  const { keyword } = props;

  const { data } = await api.patch(`/search/delete/${keyword}`);
  return data;
}
