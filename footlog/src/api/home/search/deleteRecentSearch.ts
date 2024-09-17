import api from 'api/api';
import { Response } from 'types/common/Response';

export interface SearchLogDtoDataTypes {
  log: string;
  createdAt: string;
}

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
