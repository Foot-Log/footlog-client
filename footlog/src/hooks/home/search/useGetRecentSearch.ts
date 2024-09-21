import { useQuery } from '@tanstack/react-query';
import { getRecentSearch } from '@api/home/search/getRecentSearch';

const useGetRecentSearch = () => {
  const queryKey = ['getRecentSearch'];
  const queryFn = () => getRecentSearch();

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetRecentSearch;
