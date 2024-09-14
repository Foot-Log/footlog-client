import { useQuery } from '@tanstack/react-query';
import { getRegionalCourse } from '@api/home/list/getRegionalCourse';

const useGetRegionalCourse = (areaCode: number) => {
  const queryKey = ['getRegionalCourse', areaCode];
  const queryFn = () => getRegionalCourse({ areaCode });

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRegionalCourse;
