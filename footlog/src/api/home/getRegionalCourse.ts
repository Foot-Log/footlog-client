import api from 'api/api';
import { Response } from 'types/common/Response';

interface CourseResponseDtoDataTypes {
  course_id: number;
  image: string[];
  area: string;
  name: string;
  isSave: boolean;
}

interface RequestPathVariable {
  area_name: string;
}

export async function postRegionalCourse(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes>> {
  const { area_name } = props;

  return await api.get(`/api/course/area/${area_name}`);
}
