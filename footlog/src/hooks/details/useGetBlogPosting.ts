import { useQuery } from '@tanstack/react-query';
import { getBlogPosting } from '@api/details/getBlogPosting';

const useGetBlogPosting = (course_id: number) => {
  const queryKey = ['getBlogPosting']; // 쿼리 키 설정
  const queryFn = () => getBlogPosting({ course_id }); // 쿼리 함수 설정

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetBlogPosting;
