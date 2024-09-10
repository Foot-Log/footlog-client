'use client';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { postPreferKeyword } from '@api/onboarding/postPreferKeyword';
import { PostPreferKeywordDataTypes } from '@api/onboarding/postPreferKeyword';

const usePostPreferKeyword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: PostPreferKeywordDataTypes) => postPreferKeyword(data),
    onSuccess: (data) => {
      console.log('온보딩 전송 성공', data);
      router.push('/home'); // API 요청 성공 후 홈으로 이동
    },
    onError: (error) => {
      console.log('온보딩 전송 실패', error);
    },
  });
};

export default usePostPreferKeyword;
