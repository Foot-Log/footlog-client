import api from 'api/api';
import { Response } from 'types/common/Response';

export interface CourseResponseDtoDataTypes {
  course_id: number;
  image: string;
  area: string;
  name: string;
  isSave: boolean;
}

export interface RequestPathVariable {
  areaCode: number;
}

export async function getRegionalCourse(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { areaCode } = props;

  const { data } = await api.get(`/course/area/${areaCode}`);
  return data;
}
