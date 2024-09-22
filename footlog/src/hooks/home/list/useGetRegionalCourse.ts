import { useQuery } from '@tanstack/react-query';
import { getRegionalCourse } from '@api/home/list/getRegionalCourse';

const useGetRegionalCourse = (areaCode: number) => {
  const queryKey = ['getRegionalCourse', areaCode];
  const queryFn = () => getRegionalCourse({ areaCode });

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetRegionalCourse;
