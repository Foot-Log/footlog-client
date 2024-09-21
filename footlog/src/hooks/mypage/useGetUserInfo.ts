import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@api/mypage/getUserInfo';

const useGetUserInfo = () => {
  const queryKey = ['getUserInfo'];
  const queryFn = () => getUserInfo();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetUserInfo;
