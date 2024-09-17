import { useMutation } from '@tanstack/react-query';
import { deleteRecentSearch } from '@api/home/search/deleteRecentSearch';
import { SearchLogDtoDataTypes } from 'types/search/SearchTypes';

export function useDeleteRecentSearch() {
  return useMutation({
    mutationFn: (data: SearchLogDtoDataTypes) => deleteRecentSearch(data),
    onSuccess: (data) => {
      console.log('삭제 성공', data);
    },
    onError: (error) => {
      console.log('삭제 실패', error);
    },
  });
}
