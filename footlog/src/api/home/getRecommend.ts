import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export async function getRecommend(): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { data } = await api.get(`/course/recommend`);
  return data;
}
