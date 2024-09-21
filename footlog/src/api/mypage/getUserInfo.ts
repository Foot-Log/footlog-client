import api from 'api/api';
import { Response } from 'types/common/Response';

export interface UserInfotDtoDataTypes {
  kakaoId: number;
  nickname: string;
  profileImg: string;
  level: string;
  stampCount: number;
}

export async function getUserInfo(): Promise<Response<UserInfotDtoDataTypes>> {
  const { data } = await api.get(`/user/info`);
  return data;
}
