import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
import { SearchLogDtoDataTypes } from 'types/search/SearchTypes';

export async function getSearchResult(props: SearchLogDtoDataTypes): Promise<Response<CourseResponseDtoDataTypes[]>> {
  const { keyword } = props;

  const { data } = await api.get(`/search/course/${keyword}`);
  return data;
}
