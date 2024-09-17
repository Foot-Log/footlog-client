import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface RequestPathVariable {
  keyword: string;
}

export async function getSearchResult(props: RequestPathVariable): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { keyword } = props;

  const { data } = await api.get(`/search/course/${keyword}`);
  return data;
}
