import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export async function getSaveCourseList(): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { data } = await api.get(`/course/save_list`);
  return data;
}
