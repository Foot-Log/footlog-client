'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@api/api';
import { setToken } from '@utils/token';
import Loading from 'app/loading';

const useGetLogin = () => {
  const KAKAO_CODE = typeof window !== 'undefined' ? new URL(window.location.href).searchParams.get('code') : null;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const loadingText = (
    <>
      사용자 정보를 가져오고 있습니다.
      <br />
      잠시만 기다려주세요...
    </>
  );

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .get(`user/kakao/callback?code=${KAKAO_CODE}&redirect_uri=${KAKAO_REDIRECT_URI}`)
        .then((res) => {
          setToken(res.data.data.accessToken);
          setIsLoggedIn(true);
          console.log('로그인 성공');
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data?.code === '404') {
              console.log('err');
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
      setLoading(true);
      api
        .get(`course/recommend`)
        .then((res) => {
          setLoading(false);
          if (res.data && res.data.isSuccess) {
            router.push('/home');
          } else {
            router.push('/onboarding');
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
          router.push('/onboarding');
        });
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <Loading loadingText={loadingText} />;
  }

  return null;
};

export default useGetLogin;
