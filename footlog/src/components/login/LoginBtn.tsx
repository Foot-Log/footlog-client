'use client';
import { useRouter } from 'next/navigation';

export default function LoginBtn() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`absolute bottom-20pxr flex h-48pxr w-345pxr items-center justify-center rounded-xl bg-btn-yellow`}
      onClick={() => {
        router.push('/onboarding');
      }}>
      <p className="fonts-onboardingBtn text-gray-8">카카오톡 계정으로 로그인하기</p>
    </button>
  );
}
