import api from 'api/api';
import { Response } from 'types/common/Response';
import { RequestPathVariable } from 'types/home/details/DetailsTypes';

export interface NaverBlogDtoDataTypes {
  title: string;
  link: string;
  summary: string;
  blog_name: string;
  post_date: string;
}

export async function getBlogPosting(props: RequestPathVariable): Promise<Response<NaverBlogDtoDataTypes[]>> {
  const { course_id } = props;

  const { data } = await api.get(`/course/post/${course_id}`);
  return data;
}
