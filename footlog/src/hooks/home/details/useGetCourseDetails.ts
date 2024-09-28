import { useQuery } from '@tanstack/react-query';
import { getCourseDetails } from '@api/home/details/getCourseDetails';

const useGetCourseDetails = (course_id: number) => {
  const queryKey = ['getCourseDetails', course_id];
  const queryFn = () => getCourseDetails({ course_id });

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
    enabled: course_id !== null, // course_id가 null이 아닐 때만 쿼리 실행
  });

  return { data, refetch };
};

export default useGetCourseDetails;
