'use client';

export default function LoginBtn() {
  const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  function handleLogin() {
    window.location.href = KAKAO_LINK;
  }

  return (
    <button
      type="button"
      style={{ width: 'calc(100% - 48px)' }}
      className={`absolute bottom-20pxr flex h-48pxr items-center justify-center rounded-xl bg-btn-yellow`}
      onClick={handleLogin}>
      <p className="fonts-onboardingBtn text-gray-8">카카오톡 계정으로 로그인하기</p>
    </button>
  );
}
