import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@api/api';
import { loginErrorProps, loginResProps } from 'types/login/loginProps';
import { setToken } from '@utils/token';

export function usePostLogin() {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const router = useRouter();
  const [_, setIsLoggedIn] = useState(false); // 로그인 상태를 추적

  useEffect(() => {
    if (KAKAO_CODE) {
      api
        .post(`api/login/kakao?code=${KAKAO_CODE}`)
        .then((res) => {
          const data = res.data as loginResProps; // AxiosResponse의 data를 loginResProps로 단언
          setToken(data.response.accessToken);
          setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
          console.log('로그인 성공');
          router.push('/onboarding');
        })
        .catch((err) => {
          const errorData = err.response.data as loginErrorProps; // 에러 응답 데이터 단언
          if (errorData.success_or_error_code.status === 404) {
            console.log('404에러');
            router.push('/login');
          } else {
            console.log('로그인 실패');
            router.push('/splash');
          }
        });
    }
  }, [KAKAO_CODE, router]);
}
