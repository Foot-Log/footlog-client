import { useQuery } from '@tanstack/react-query';
import { getRegionalCourse } from '@api/home/getRegionalCourse';

const useGetRegionalCourse = (area_name: string) => {
  const queryKey = ['getRegionalCourse', area_name]; // 쿼리 키 설정
  const queryFn = () => getRegionalCourse({ area_name }); // 쿼리 함수 설정

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRegionalCourse;
