import { useQuery } from '@tanstack/react-query';
import { getRegionalCourse } from '@api/home/list/getRegionalCourse';

const useGetRegionalCourse = (area_name: string) => {
  const queryKey = ['getRegionalCourse', area_name];
  const queryFn = () => getRegionalCourse({ area_name });

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRegionalCourse;
