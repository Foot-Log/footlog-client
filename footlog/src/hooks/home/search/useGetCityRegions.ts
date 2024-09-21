import { useQuery } from '@tanstack/react-query';
import { getCityRegions } from '@api/home/search/getCityRegions';

const useGetCityRegions = () => {
  const queryKey = ['getCityRegions'];
  const queryFn = () => getCityRegions();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetCityRegions;
