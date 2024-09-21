import { useQuery } from '@tanstack/react-query';
import { getCourseDetails } from '@api/home/details/getCourseDetails';

const useGetCourseDetails = (course_id: number) => {
  const queryKey = ['getCourseDetails', course_id];
  const queryFn = () => getCourseDetails({ course_id });

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetCourseDetails;
