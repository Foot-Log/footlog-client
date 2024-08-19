import { LogoTextIcon } from '@public/icon';
import LoginBtn from '@components/login/LoginBtn';

export default function page() {
  return (
    <main className="pt-300pxr relative flex h-full w-full flex-col items-center">
      <section className="gap-8pxr pt-12pxr flex flex-col items-center">
        <LogoTextIcon />
        <p className="fonts-loginSubtitle">국내 플로깅 코스 추천 서비스</p>
      </section>
      <LoginBtn />
    </main>
  );
}
