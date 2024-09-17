import api from 'api/api';
import { Response } from 'types/common/Response';

export interface UpdateLogDtoTypes {
  logContent: string;
  existingUrls: string[];
  newImages: File[];
}

export async function updateLog(logId: number, updateData: UpdateLogDtoTypes): Promise<Response<UpdateLogDtoTypes>> {
  const formData = new FormData();

  // logContent 추가
  formData.append('logContent', updateData.logContent);

  // 기존 이미지 URLs 추가
  updateData.existingUrls.forEach((url) => {
    formData.append('existingUrls', url);
  });

  // 새 이미지 파일 추가
  updateData.newImages.forEach((file) => {
    formData.append('newImages', file);
  });

  // API 호출
  const { data } = await api.patch(`/log/update/${logId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}
