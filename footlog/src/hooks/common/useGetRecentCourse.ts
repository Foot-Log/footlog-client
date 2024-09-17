import { useQuery } from '@tanstack/react-query';
import { getRecentCourse } from '@api/common/getRecentCourse';

const useGetRecentCourse = () => {
  const queryKey = ['getRecentCourse'];
  const queryFn = () => getRecentCourse();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRecentCourse;
