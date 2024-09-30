'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogoIcon } from '@public/icon';
import { TeamTextIcon } from '@public/icon';

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000); // 3초 후에 로그인 페이지로 이동

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex h-full w-full flex-col items-center pt-72">
      <LogoIcon />
      <TeamTextIcon className="absolute bottom-7" />
    </main>
  );
}
