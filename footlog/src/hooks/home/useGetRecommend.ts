import { useQuery } from '@tanstack/react-query';
import { getRecommend } from '@api/home/getRecommend';

const useGetRecommend = () => {
  const queryKey = ['getRecommend'];
  const queryFn = () => getRecommend();

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetRecommend;
