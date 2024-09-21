import { useQuery } from '@tanstack/react-query';
import { getRecentCourse } from '@api/common/getRecentCourse';

const useGetRecentCourse = () => {
  const queryKey = ['getRecentCourse'];
  const queryFn = () => getRecentCourse();

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetRecentCourse;
