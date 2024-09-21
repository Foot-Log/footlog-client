import { useQuery } from '@tanstack/react-query';
import { getPopularCourse } from '@api/common/getPopularCourse';

const useGetPopularCourse = () => {
  const queryKey = ['getPopularCourse'];
  const queryFn = () => getPopularCourse();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetPopularCourse;
