import api from 'api/api';
import { Response } from 'types/common/Response';

export interface CompletedListDtoDataTypes {
  logId: number;
  address: string;
  name: string;
}

export async function getCompletedList(): Promise<Response<CompletedListDtoDataTypes[]>> {
  const { data } = await api.get(`/log/completedList`);
  return data;
}
