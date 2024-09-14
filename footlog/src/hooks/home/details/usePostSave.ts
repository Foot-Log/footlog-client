import { useMutation } from '@tanstack/react-query';
import { postSave } from '@api/home/details/postSave';
import { RequestPathVariable } from 'types/home/details/DetailsTypes';

const usePostSave = () => {
  return useMutation({
    mutationFn: (data: RequestPathVariable) => postSave(data),
    onSuccess: (data) => {
      console.log('저장 전송 성공', data);
    },
    onError: (error) => {
      console.log('저장 전송 실패', error);
    },
  });
};

export default usePostSave;
