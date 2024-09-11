import api from 'api/api';
import { Response } from 'types/common/Response';

export interface CourseResponseDtoDataTypes {
  course_id: number;
  image: string[];
  area: string;
  name: string;
  isSave: boolean;
}

export interface RequestPathVariable {
  area_name: string;
}

export async function getRegionalCourse(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes>> {
  const { area_name } = props;

  return await api.get(`/api/course/area/${area_name}`);
}
