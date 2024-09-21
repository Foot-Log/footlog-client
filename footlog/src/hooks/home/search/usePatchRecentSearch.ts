import { useMutation } from '@tanstack/react-query';
import { patchRecentSearch } from '@api/home/search/patchRecentSearch';
import { SearchLogDtoDataTypes } from 'types/home/search/SearchTypes';

const usePatchRecentSearch = () => {
  return useMutation({
    mutationFn: (data: SearchLogDtoDataTypes) => patchRecentSearch(data),
    onSuccess: (data) => {
      console.log('삭제 성공', data);
    },
    onError: (error) => {
      console.log('삭제 실패', error);
    },
  });
};

export default usePatchRecentSearch;
