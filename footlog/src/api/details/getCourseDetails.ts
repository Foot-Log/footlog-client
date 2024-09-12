import api from 'api/api';
import { Response } from 'types/common/Response';
import { RequestPathVariable } from 'types/home/details/DetailsTypes';

export interface CourseDetailDtoDataTypes {
  course_id: number;
  name: string;
  image: string;
  summary: string;
  address: string;
  tel: string;
  isSave: boolean;
}

export async function getCourseDetails(props: RequestPathVariable): Promise<Response<CourseDetailDtoDataTypes>> {
  const { course_id } = props;

  const { data } = await api.get(`/api/course/detail/${course_id}`);
  return data;
}
