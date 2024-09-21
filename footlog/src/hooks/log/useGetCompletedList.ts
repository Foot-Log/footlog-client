import { useQuery } from '@tanstack/react-query';
import { getCompletedList } from '@api/log/getCompletedList';

const useGetCompletedList = () => {
  const queryKey = ['getCompletedList'];
  const queryFn = () => getCompletedList();

  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  });

  return { data, refetch };
};

export default useGetCompletedList;
