import { useQuery } from '@tanstack/react-query';
import { getPopularCourse } from '@api/common/getPopularCourse';

const useGetPopularCourse = () => {
  const queryKey = ['getPopularCourse'];
  const queryFn = () => getPopularCourse();

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetPopularCourse;
