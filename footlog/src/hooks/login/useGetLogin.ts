'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@api/api';
import { setToken } from '@utils/token';

const useGetLogin = () => {
  const KAKAO_CODE = typeof window !== 'undefined' ? new URL(window.location.href).searchParams.get('code') : null;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .get(`user/kakao/callback?code=${KAKAO_CODE}&redirect_uri=${KAKAO_REDIRECT_URI}`)
        .then((res) => {
          setToken(res.data.data.accessToken);
          console.log(res.data.data.accessToken);
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          console.log('로그인 성공');
          router.push('/onboarding');
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data?.code === '404') {
              console.log('404에러');
              router.push('/login');
            } else {
              console.log('로그인 실패');
            }
          } else {
            console.log('네트워크 오류 또는 서버 연결 실패:', err.message);
            router.push('/');
          }
        });
    }
  }, [KAKAO_CODE, router]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get(`course/recommend`)

        .then((res) => {
          if (res.data) {
            if (res.data.isSuccess === true) {
              console.log('코스 가져오기 성공');
              router.push('/home');
            }
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.data.isSuccess === false) {
            console.log('코스 가져오기 실패');
            router.push('/onboarding');
          }
        });
    }
  }, [isLoggedIn, router]);
};

export default useGetLogin;
