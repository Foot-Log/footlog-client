import api from 'api/api';
import { Response } from 'types/common/Response';

export interface SaveCourseListDtoDataTypes {
  course_id: number;
  image: string;
  area: string;
  name: string;
  isSave: boolean;
}

export async function getSaveCourseList(): Promise<Response<SaveCourseListDtoDataTypes[]>> {
  const { data } = await api.get(`/course/save_list`);
  return data;
}
