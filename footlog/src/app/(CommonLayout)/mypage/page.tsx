'use client';
import SaveCourseContainer from '@components/mypage/SaveCourseContainer';
import RecentCourseContainer from '@components/common/RecentCourseContainer/RecentCourseContainer';
import { Flag1Icon, Flag2Icon, Flag3Icon, Flag4Icon, Flag5Icon } from '@public/icon';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';
import useGetUserInfo from '@hooks/mypage/useGetUserInfo';
import React, { useEffect, useState } from 'react';
import { useRecoilCallback } from 'recoil';

export default function page() {
  const { data: saveCourseList, refetch: refetchSaveCourses } = useGetSaveCourseList();
  const { data: recentCourseList, refetch: refetchRecentCourses } = useGetRecentCourse();
  const { data: userInfo } = useGetUserInfo();

  console.log('userInfo', userInfo);

  const [level, setLevel] = useState<number>(1);
  const [stamp, setStamp] = useState<number>(1);

  useEffect(() => {
    if (userInfo?.data?.level) {
      if (userInfo.data.level == '새싹 플로거') {
        setLevel(1);
      } else if (userInfo.data.level == '초보 플로거') {
        setLevel(2);
      } else if (userInfo.data.level == '중수 플로거') {
        setLevel(3);
      } else if (userInfo.data.level == '고수 플로거') {
        setLevel(4);
      } else if (userInfo.data.level == '베스트 플로거') {
        setLevel(5);
      }
    }
    setStamp(userInfo?.data?.stampCount || 1);
  }, [userInfo?.data?.level]);

  useEffect(() => {
    refetchSaveCourses();
    refetchRecentCourses();
  }, []);

  if (!saveCourseList?.data || !recentCourseList?.data || !userInfo?.data) {
    return <></>;
  }

  const renderFlagIcon = () => {
    switch (stamp) {
      case 1:
        return <Flag1Icon />;
      case 2:
        return <Flag2Icon />;
      case 3:
        return <Flag3Icon />;
      case 4:
        return <Flag4Icon />;
      case 5:
        return <Flag5Icon />;
      default:
        return <Flag1Icon />;
    }
  };

  return (
    <div className="mt-16pxr flex h-full w-full flex-col overflow-y-auto">
      <section className="ml-24pxr h-174pxr">
        <div className="font-mypageTitle">마이 페이지</div>

        <div className="mt-27pxr flex">
          <div className="mt-5pxr">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle opacity="0.5" cx="40" cy="40" r="40" fill="#D9D9D9" />
            </svg> */}
            <img
              src={userInfo.data.profileImg}
              alt="profile"
              width="80"
              height="80"
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>

          <div className="ml-24pxr">
            <div className="font-mypageNickname">{userInfo.data.nickname}</div>
            <div className="mt-8pxr flex">
              <div className="font-mypageLevel font-medium text-gray-4">레벨 {level}</div>
              <div className="font-mypageLevel ml-2pxr font-bold text-main-green">{userInfo.data.level}</div>
            </div>
            <div className="mt-12pxr">{renderFlagIcon()}</div>
          </div>
        </div>
      </section>

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <SaveCourseContainer title="저장 목록" courses={saveCourseList?.data} />
      <RecentCourseContainer courses={recentCourseList?.data} />

      <div className="h-8pxr w-393pxr bg-gray-1" />

      <div className="ml-24pxr">
        <div className="font-mypageDetail mt-20pxr text-gray-8">선호도 재설정</div>
        <div className="font-mypageDetai mt-20pxr text-gray-4">회원 탈퇴</div>
      </div>
    </div>
  );
}
