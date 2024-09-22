import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface RequestPathVariable {
  sigungu_id: number;
}

export async function getCityCourse(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { sigungu_id } = props;

  const { data } = await api.get(`/course/sigungu/${sigungu_id}`);
  return data;
}
