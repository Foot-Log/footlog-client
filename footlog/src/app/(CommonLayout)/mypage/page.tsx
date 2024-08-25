import MypageContainer from '@components/mypage/MypageContainer';
import { recommendCoursesData } from '@core/recommendCoursesData';
import { GreenFlagIcon, NullFlagIcon } from '@public/icon';

export default function page() {
  return (
    <div className="mt-16pxr flex flex-col overflow-y-auto">
      <section className="ml-24pxr h-174pxr">
        <div className="font-mypageTitle">마이 페이지</div>

        <div className="mt-27pxr flex">
          <div className="mt-5pxr">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle opacity="0.5" cx="40" cy="40" r="40" fill="#D9D9D9" />
            </svg>
          </div>

          <div className="ml-24pxr">
            <div className="font-mypageNickname">닉네임</div>
            <div className="mt-8pxr flex">
              <div className="font-mypageLevel font-medium text-gray-4">레벨 1</div>
              <div className="font-mypageLevel ml-2pxr font-bold text-main-green">새싹 플로거</div>
            </div>
            <div className="flex">
              <GreenFlagIcon />
              <NullFlagIcon />
            </div>
          </div>
        </div>
      </section>

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <section className="ml-24pxr">
        <MypageContainer title="저장 목록" courses={recommendCoursesData} />
        <MypageContainer title="최근 확인한 코스" courses={recommendCoursesData} />
      </section>

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <div className="ml-24pxr">
        <div className="font-mypageDetail mt-20pxr text-gray-8">선호도 재설정</div>
        <div className="font-mypageDetai mt-20pxr text-gray-4">로그아웃</div>
      </div>
    </div>
  );
}
