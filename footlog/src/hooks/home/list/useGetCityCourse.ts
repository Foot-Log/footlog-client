import { useQuery } from '@tanstack/react-query';
import { getCityCourse } from '@api/home/list/getCityCourse';

const useGetCityCourse = (sigungu_id: number) => {
  const queryKey = ['getCityCourse', sigungu_id];
  const queryFn = () => getCityCourse({ sigungu_id });

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetCityCourse;
