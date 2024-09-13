import { useQuery } from '@tanstack/react-query';
import { getRegions } from '@api/getRegions';

const useGetRegions = () => {
  const queryKey = ['getRegions']; // 쿼리 키 설정
  const queryFn = () => getRegions(); // 쿼리 함수 설정

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRegions;
