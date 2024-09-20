import { useQuery } from '@tanstack/react-query';
import { getRecentCourseList } from '@api/mypage/getRecentCourseList';

const useGetRecentCourseList = () => {
  const queryKey = ['getRecentCourseList'];
  const queryFn = () => getRecentCourseList();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetRecentCourseList;
