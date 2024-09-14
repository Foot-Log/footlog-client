import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface RequestPathVariable {
  areaCode: number;
}

export async function getRegionalCourse(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { areaCode } = props;

  const { data } = await api.get(`/course/area/${areaCode}`);
  return data;
}
