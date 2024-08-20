'use client';
import { useRouter } from 'next/navigation';

export default function LoginBtn() {
  const router = useRouter();

  return (
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
  );
}
