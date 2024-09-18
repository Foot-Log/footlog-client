import { useQuery } from '@tanstack/react-query';
import { getSaveCourseList } from '@api/mypage/getSaveCourseList';

const useGetSaveCourseList = () => {
  const queryKey = ['getSaveCourseList'];
  const queryFn = () => getSaveCourseList();

  const { data } = useQuery({
    queryKey,
    queryFn,
  });

  return { data };
};

export default useGetSaveCourseList;
