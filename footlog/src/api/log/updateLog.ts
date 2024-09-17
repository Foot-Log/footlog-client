import api from 'api/api';
import { Response } from 'types/common/Response';

export interface UpdateLogDtoTypes {
    logContent: string;
    existingUrls: string[];
    newImages: File[];
}

export async function updateLog(logId: number, updateData: UpdateLogDtoTypes): Promise<Response<UpdateLogDtoTypes>>{
    const formData = new FormData();

    updateData.newImages.forEach((file) => {
        formData.append('newImages', file);
      });

    // API 호출
  const { data } = await api.patch(`/log/update/${logId}`, formData, {
    params: {
      logContent: updateData.logContent,
      existingUrls: updateData.existingUrls,
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
  }