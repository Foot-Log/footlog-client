import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '@api/home/search/getSearchResult';

const useGetSearchResult = (keyword: string) => {
  const queryKey = ['getSearchResult', keyword];
  const queryFn = () => getSearchResult({ keyword });

  const { data } = useQuery({
    queryKey,
    queryFn,
    enabled: keyword.trim() !== '', // keyword가 빈 문자열이 아닐 때만 쿼리 실행
  });

  return { data };
};

export default useGetSearchResult;
