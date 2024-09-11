import api from 'api/api';
import { Response } from 'types/common/Response';

export interface RequestPathVariable {
  course_id: number;
}

export async function postComplete(props: RequestPathVariable): Promise<Response<any>> {
  const { course_id } = props;

  return await api.post(`/course/complete/${course_id}`);
}