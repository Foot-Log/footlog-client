import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { deleteUser } from '@api/mypage/deleteUser';
import { Response } from 'types/common/Response';

// useDeleteUser 훅에 mutationFn 명시
const useDeleteUser = (): UseMutationResult<Response<any>, Error, void, unknown> => {
  return useMutation<Response<any>, Error, void>({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      console.log('User successfully deleted:', data);
    },
    onError: (error) => {
      console.error('Error deleting user:', error.message);
    },
  });
};

export default useDeleteUser;
