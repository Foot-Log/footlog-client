import { useMutation } from '@tanstack/react-query';
import { postComplete } from '@api/details/postComplete';
import { RequestPathVariable } from 'types/home/details/DetailsTypes';

const usePostComplete = () => {
  return useMutation({
    mutationFn: (data: RequestPathVariable) => postComplete(data),
    onSuccess: (data) => {
      console.log('완주 전송 성공', data);
    },
    onError: (error) => {
      console.log('완주 전송 실패', error);
    },
  });
};

export default usePostComplete;
