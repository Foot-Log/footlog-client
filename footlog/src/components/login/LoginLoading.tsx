'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useGetLogin from '@hooks/login/useGetLogin';
import Loading from 'app/loading';
import api from '@api/api';

export default function LoginLoading() {
  const isLoggedIn = useGetLogin();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const loadingText = (
    <>
      사용자 정보를 가져오고 있습니다.
      <br />
      잠시만 기다려주세요...
    </>
  );

  useEffect(() => {
    console.log('isLoggedIn in LoginLoading:', isLoggedIn); // 추가
    if (isLoggedIn) {
      setLoading(true);
      api
        .get(`course/recommend`)
        .then((res) => {
          setLoading(false);
          console.log('API 호출 성공:', res); // 추가
          if (res.data && res.data.isSuccess) {
            router.push('/home');
          } else {
            router.push('/onboarding');
          }
        })
        .catch((err) => {
          setLoading(false);
          console.error('API 호출 실패:', err); // 추가
          console.error(err);
          router.push('/onboarding');
        });
    }
  }, [isLoggedIn, router]);

  if (loading) {
    return <Loading loadingText={loadingText} />;
  }

  return null; // 다른 컴포넌트 렌더링
}
