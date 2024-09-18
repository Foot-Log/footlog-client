import api from 'api/api';
import { Response } from 'types/common/Response';

export interface RecentCourseListDtoDataTypes {
  course_id: number;
  image: string;
  area: string;
  name: string;
  isSave: boolean;
}

export async function getRecentCourseList(): Promise<Response<RecentCourseListDtoDataTypes[]>> {
  const { data } = await api.get(`/course/recent`);
  return data;
}
