import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export async function getPopularCourse(): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { data } = await api.get(`/course/hot`);
  return data;
}
