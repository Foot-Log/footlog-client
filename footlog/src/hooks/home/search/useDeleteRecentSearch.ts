import { useMutation } from '@tanstack/react-query';
import { deleteRecentSearch } from '@api/home/search/deleteRecentSearch';
import { SearchLogDtoDataTypes } from '@api/home/search/getRecentSearch';

export function useDeleteRecentSearch() {
  return useMutation({
    mutationFn: (data: SearchLogDtoDataTypes) => deleteRecentSearch(data),
    onSuccess: (data) => {
      console.log('완주 전송 성공', data);
    },
    onError: (error) => {
      console.log('완주 전송 실패', error);
    },
  });
}
