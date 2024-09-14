import { useQuery } from '@tanstack/react-query';
import { getRegions } from '@api/home/getRegions';

const useGetRegions = () => {
  const queryKey = ['getRegions'];
  const queryFn = () => getRegions();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRegions;
