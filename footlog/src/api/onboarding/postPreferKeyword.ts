import api from 'api/api';
import { Response } from 'types/common/Response';
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';

export interface PostPreferKeywordDataTypes {
  firstKeyword: string[];
  secondKeyword: string[];
  thirdKeyword: string[];
}

export async function postPreferKeyword(
  props: PostPreferKeywordDataTypes,
): Promise<Response<{ data: CourseResponseDtoDataTypes[] }>> {
  const { firstKeyword, secondKeyword, thirdKeyword } = props;

  return await api.post(`/course/analyze`, {
    firstKeyword,
    secondKeyword,
    thirdKeyword,
  });
}
