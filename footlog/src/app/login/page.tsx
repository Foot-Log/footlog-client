'use client';
import { LogoTextIcon } from '@public/icon';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  return (
    <main className="pt-300pxr relative flex h-full w-full flex-col items-center">
      <section className="gap-8pxr pt-12pxr flex flex-col items-center">
        <LogoTextIcon />
        <p className="fonts-loginSubtitle">국내 플로깅 코스 추천 서비스</p>
      </section>
      <button
        type="button"
        className={`bottom-20pxr h-48pxr w-345pxr absolute flex items-center justify-center rounded-xl bg-btn-yellow`}
        onClick={() => {
          router.push('/onboarding');
        }}>
        <p className="fonts-onboardingBtn" style={{ color: '#333333' }}>
          카카오톡 계정으로 로그인하기
        </p>
      </button>
    </main>
  );
}
