'use client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

// QueryClient를 생성하는 함수
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR(서버 사이드 렌더링)에서는 클라이언트에서 즉시 다시 데이터를 가져오는 것을
        // 방지하기 위해 기본 staleTime을 0보다 높게 설정하는 경우가 많습니다.
        staleTime: 60 * 1000, // 1분
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

// QueryClient를 가져오는 함수
function getQueryClient() {
  if (typeof window === 'undefined') {
    // 서버: 항상 새로운 QueryClient를 만듦
    return makeQueryClient();
  }

  // 브라우저: 기존에 QueryClient가 없으면 새로운 QueryClient를 만듦
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
