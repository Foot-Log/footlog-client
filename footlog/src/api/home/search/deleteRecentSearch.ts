import api from 'api/api';
import { Response } from 'types/common/Response';
import { SearchLogDtoDataTypes } from 'types/search/SearchTypes';

export async function deleteRecentSearch(props: SearchLogDtoDataTypes): Promise<Response<any>> {
  const { log, createdAt } = props;

  const { data } = await api.delete(`/search/delete`, {
    data: {
      log,
      createdAt,
    },
  });
  return data;
}
