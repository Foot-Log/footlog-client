import { useQuery } from '@tanstack/react-query';
import { getCourseDetails } from '@api/home/details/getCourseDetails';

const useGetCourseDetails = (course_id: number) => {
  const queryKey = ['getCourseDetails', course_id];
  const queryFn = () => getCourseDetails({ course_id });

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetCourseDetails;
