import api from 'api/api';
import { Response } from 'types/common/Response';

export async function deleteUser(): Promise<Response<any>> {
  const { data } = await api.delete(`/user/withdraw`);
  return data;
}
