'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@api/api';
import { loginErrorProps, loginResProps } from 'types/login/loginProps';
import { setToken } from '@utils/token';

const useGetLogin = () => {
  const KAKAO_CODE = typeof window !== 'undefined' ? new URL(window.location.href).searchParams.get('code') : null;
  const router = useRouter();
  const [_, setIsLoggedIn] = useState(false); // 로그인 상태를 추적

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .get(`user/kakao/callback?code=${KAKAO_CODE}`)
        .then((res) => {
          const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
          setToken(data.result.accessToken);
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          console.log('로그인 성공');
          router.push('/onboarding');
        })
        .catch((err) => {
          if (err.response) {
            const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
            if (errorData?.code === '404') {
              console.log('404에러');
              router.push('/login');
            } else {
              console.log('로그인 실패');
            }
          } else {
            // 응답이 없는 경우, 네트워크 오류 등을 처리
            console.log('네트워크 오류 또는 서버 연결 실패:', err.message);
            router.push('/login');
          }
        });
    }
  }, [KAKAO_CODE, router]);
};

export default useGetLogin;
