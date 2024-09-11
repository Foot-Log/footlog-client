import axios, { AxiosInstance } from 'axios';
import { getToken } from '@utils/token';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ONBOARDING_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

// 응답 인터셉터
// 항상 패칭 요청을 보내면 response.data 리턴
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  // 에러 처리
  async (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);

// 요청 인터셉터
// 토큰이 필요한 모든 요청의 헤더에 토큰 넣어서 보내기
api.interceptors.request.use((config) => {
  const accessToken = getToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
