import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@api/mypage/getUserInfo';

const useGetUserInfo = () => {
  const queryKey = ['getCompletedList'];
  const queryFn = () => getUserInfo();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetUserInfo;
