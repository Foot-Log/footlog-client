'use client';
import { LogoTextIcon } from '@public/icon';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  return (
    <main className="relative flex h-full w-full flex-col items-center pt-72">
      <section className="flex flex-col items-center gap-2 pt-3">
        <LogoTextIcon />
        <p className="fonts-loginSubtitle">국내 플로깅 코스 추천 서비스</p>
      </section>
      <button
        type="button"
        className={`absolute bottom-5 flex h-12 w-[345px] items-center justify-center rounded-xl bg-btn-yellow`}
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
