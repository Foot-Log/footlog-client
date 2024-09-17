import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '@api/home/search/getSearchResult';

const useGetSearchResult = (keyword: string) => {
  const queryKey = ['getSearchResult', keyword];
  //const queryFn = () => getSearchResult({ keyword });
  const queryFn = () => {
    console.log(`Keyword for API: ${keyword}`); // 로그 추가
    return getSearchResult({ keyword });
  };

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetSearchResult;
