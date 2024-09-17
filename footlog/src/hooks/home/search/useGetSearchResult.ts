import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '@api/home/search/getSearchResult';

const useGetSearchResult = (keyword: string) => {
  const queryKey = ['getSearchResult', keyword];
  const queryFn = () => getSearchResult({ keyword });

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetSearchResult;
