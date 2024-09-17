import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { updateLog, UpdateLogDtoTypes } from '@api/log/updateLog';
import { Response } from 'types/common/Response';

const useUpdateLog = (
  logId: number,
): UseMutationResult<Response<UpdateLogDtoTypes>, Error, UpdateLogDtoTypes, unknown> => {
  return useMutation<Response<UpdateLogDtoTypes>, Error, UpdateLogDtoTypes>({
    mutationFn: (updateData: UpdateLogDtoTypes) => updateLog(logId, updateData),
    onSuccess: (data) => {
      console.log('성공', data);
    },
    onError: (error) => {
      console.log('실패', error);
    },
  });
};

export default useUpdateLog;
