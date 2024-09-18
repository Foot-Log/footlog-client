'use client';
import MypageContainer from '@components/mypage/MypageContainer';
import RecentCourseContainer from '@components/common/RecentCourseContainer';
//import { recommendCoursesData } from '@core/recommendCoursesData';
import { Flag2Icon } from '@public/icon';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';
import useGetRecentCourseList from '@hooks/mypage/useGetRecentCourseList';

export default function page() {
  const { data: saveCourseList } = useGetSaveCourseList();
  const { data: recentCourseList } = useGetRecentCourseList();
  console.log('saveCourseList', saveCourseList);
  console.log('recentCourseList', recentCourseList);

  if (!saveCourseList?.data) {
    return <></>;
  }
  if (!recentCourseList?.data) {
    return <></>;
  }

  return (
    <div className="mt-16pxr flex h-full w-full flex-col overflow-y-auto">
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
            <div className="mt-12pxr">
              <Flag2Icon />
              {/* 추후 깃발 조정 */}
            </div>
          </div>
        </div>
      </section>

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <MypageContainer title="저장 목록" courses={saveCourseList?.data} />
      <RecentCourseContainer courses={recentCourseList?.data} />

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <div className="ml-24pxr">
        <div className="font-mypageDetail mt-20pxr text-gray-8">선호도 재설정</div>
        <div className="font-mypageDetai mt-20pxr text-gray-4">회원 탈퇴</div>
      </div>
    </div>
  );
}
