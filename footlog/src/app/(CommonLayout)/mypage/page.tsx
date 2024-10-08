'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SaveCourseContainer from '@components/mypage/SaveCourseContainer';
import RecentCourseContainer from '@components/common/RecentCourseContainer/RecentCourseContainer';
import { Flag0Icon, Flag1Icon, Flag2Icon, Flag3Icon, Flag4Icon, Flag5Icon } from '@public/icon';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';
import useGetUserInfo from '@hooks/mypage/useGetUserInfo';
import useDeleteUser from '@hooks/mypage/useDeleteUser';
import ConfirmModal from '@components/mypage/ConfirmModal';

export default function page() {
  const router = useRouter();
  const { data: saveCourseList } = useGetSaveCourseList();
  const { data: recentCourseList } = useGetRecentCourse();
  const { data: userInfo } = useGetUserInfo();
  const { mutate: deleteUser } = useDeleteUser();
  const [isModalOpen, setModalOpen] = useState(false);

  const [level, setLevel] = useState<number>(1);
  const [stamp, setStamp] = useState<number>(0);

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
    setStamp(userInfo?.data?.stampCount || 0);
  }, [userInfo?.data?.level]);

  if (!saveCourseList?.data || !recentCourseList?.data || !userInfo?.data) {
    return <></>;
  }

  const handleDeleteUser = () => {
    setModalOpen(true); // 모달 열기
  };

  function handleConfirmBtn() {
    deleteUser();
    router.push('/');
  }

  function handleCloseBtn() {
    setModalOpen(false);
    router.push('/mypage');
  }

  const renderFlagIcon = () => {
    switch (stamp) {
      case 0:
        return <Flag0Icon />;
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
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col overflow-y-auto pt-16pxr">
      <section className="mb-36pxr ml-24pxr h-138pxr">
        <div className="font-mypageTitle">마이 페이지</div>

        <div className="mt-27pxr flex">
          <div className="mt-5pxr">
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

      <SaveCourseContainer title="저장 목록" courses={saveCourseList.data} />
      <RecentCourseContainer courses={recentCourseList?.data} />

      <div>
        <div className="h-8pxr w-full bg-gray-1" />
        <div className="mb-21pxr ml-24pxr">
          <div>
            <button className="font-mypageDetail mt-20pxr text-gray-8" onClick={() => router.push('/onboarding')}>
              선호도 재설정
            </button>
          </div>
          <div>
            <button className="font-mypageDetai mt-20pxr text-gray-4" onClick={handleDeleteUser}>
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && <ConfirmModal handleConfirmBtn={handleConfirmBtn} handleCloseBtn={handleCloseBtn} />}
    </div>
  );
}
