import { useEffect } from 'react';
import api from '@api/api';
import { getToken } from '@utils/token';

const useSetInterceptors = () => {
  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use((config) => {
      const accessToken = getToken();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(requestInterceptor);
    };
  }, []);
};

export default useSetInterceptors;
