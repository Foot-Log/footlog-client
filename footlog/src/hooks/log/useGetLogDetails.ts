import { useQuery } from '@tanstack/react-query';
import { getLogDetails } from '@api/log/getLogDetails';

const useGetLogDetails = (logId: number, options = {}) => {
  const queryKey = ['getLogDetails', logId];
  const queryFn = () => getLogDetails({ logId });

  const { data } = useQuery({
    queryKey,
    queryFn,
    ...options,
  });

  return { data };
};

export default useGetLogDetails;
