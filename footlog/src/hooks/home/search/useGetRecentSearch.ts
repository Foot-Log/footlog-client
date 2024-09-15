import { useQuery } from '@tanstack/react-query';
import { getRecentSearch } from '@api/home/search/getRecentSearch';

const useGetRecentSearch = () => {
  const queryKey = ['getRecentSearch'];
  const queryFn = () => getRecentSearch();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default getRecentSearch;
