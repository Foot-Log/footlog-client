'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex h-full w-full flex-col items-center overflow-hidden pt-282pxr">
      <section className="flex flex-col items-center gap-12pxr">
        <h2 className="fonts-errorTitle">페이지를 찾을 수 없습니다.</h2>
        <p className="fonts-errorSubtitle">
          방문하시려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          변경 혹은 삭제되어 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소를 다시 한번 확인해 주시기 바랍니다.
        </p>
      </section>
      <section className="absolute bottom-19pxr flex gap-11pxr">
        <Link
          href="#"
          onClick={() => window.history.back()}
          className="fonts-onboardingBtn flex h-48pxr w-167pxr items-center justify-center rounded-[12px] bg-gray-4 text-white">
          이전 페이지
        </Link>
        <Link
          href="/home"
          className="fonts-onboardingBtn flex h-48pxr w-167pxr items-center justify-center rounded-[12px] bg-main-green text-white">
          메인 홈 화면
        </Link>
      </section>
    </main>
  );
}
