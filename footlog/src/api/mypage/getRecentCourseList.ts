import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export async function getRecentCourseList(): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { data } = await api.get(`/course/recent`);
  return data;
}
