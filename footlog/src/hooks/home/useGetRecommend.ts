import { useQuery } from '@tanstack/react-query';
import { getRecommend } from '@api/home/getRecommend';

const useGetRecommend = () => {
  const queryKey = ['getRecommend'];
  const queryFn = () => getRecommend();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRecommend;
