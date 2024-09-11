import { useQuery } from '@tanstack/react-query';
import { getCourseDetails } from '@api/details/getCourseDetails';

const useGetCourseDetails = (course_id: number) => {
  const queryKey = ['getCourseDetails']; // 쿼리 키 설정
  const queryFn = () => getCourseDetails({ course_id }); // 쿼리 함수 설정

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetCourseDetails;
