import { useQuery } from '@tanstack/react-query';
import { getBlogPosting } from '@api/home/details/getBlogPosting';

const useGetBlogPosting = (course_id: number) => {
  const queryKey = ['getBlogPosting'];
  const queryFn = () => getBlogPosting({ course_id });

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetBlogPosting;
