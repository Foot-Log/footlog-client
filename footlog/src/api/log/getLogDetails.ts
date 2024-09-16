import api from 'api/api';
import { Response } from 'types/common/Response';

export interface RequestPathVariable {
  logId: number;
}

export interface LogDtoTypes {
  logId: number;
  address: string;
  logContent: string;
  photos: [];
}

export async function getLogDetails(props: RequestPathVariable): Promise<Response<LogDtoTypes>> {
  const { logId } = props;

  const { data } = await api.get(`/log/detail/${logId}`);
  return data;
}
