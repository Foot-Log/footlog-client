import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LocationCardProps } from 'types/common/CommonTypes';
import { SearchSaveFilledIcon, SearchSaveOutlineIcon } from '@public/icon';
import usePostSave from '@hooks/home/details/usePostSave';
import useGetCompletedList from '@hooks/log/useGetCompletedList';
import useGetSaveCourseList from '@hooks/mypage/useGetSaveCourseList';
import useGetRecommend from '@hooks/home/useGetRecommend';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';
import useGetRecentCourse from '@hooks/common/useGetRecentCourse';
import useGetCityCourse from '@hooks/home/list/useGetCityCourse';
import useGetRegionalCourse from '@hooks/home/list/useGetRegionalCourse';

export default function BigLocationCard(props: LocationCardProps) {
  const { course } = props;
  const pathname = usePathname();
  const region_id = pathname.split('/').pop();
  const regionIdNumber = region_id ? Number(region_id) : undefined;
  const isBigPage = pathname.includes('/big');
  const { mutate: postSaveMutate } = usePostSave();
  const { refetch: refetchCompletedList } = useGetCompletedList();
  const { refetch: refetchSavedList } = useGetSaveCourseList();
  const { refetch: refetchRecommend } = useGetRecommend();
  const { refetch: refetchPopular } = useGetPopularCourse();
  const { refetch: refetchRecentCourse } = useGetRecentCourse();

  const { refetch: refetchSmallCourse } = regionIdNumber ? useGetCityCourse(regionIdNumber) : { refetch: null };
  const { refetch: refetchBigCourse } = regionIdNumber ? useGetRegionalCourse(regionIdNumber) : { refetch: null };

  const [isSaved, setIsSaved] = useState(course.isSave); // 초기 상태 설정

  const handleSaveClick = () => {
    const newSaveState = !isSaved; // 현재 저장 상태 반전

    postSaveMutate(
      { course_id: course.course_id },
      {
        onSuccess: () => {
          setIsSaved(newSaveState);
          refetchCompletedList();
          refetchSavedList();
          refetchRecommend();
          refetchPopular();
          refetchRecentCourse();

          // BigPage일 경우 BigCourse refetch
          if (isBigPage && refetchBigCourse) {
            refetchBigCourse();
          }

          // SmallPage일 경우 SmallCourse refetch
          if (!isBigPage && refetchSmallCourse) {
            refetchSmallCourse();
          }
        },
      },
    );
  };

  return (
    <section className="relative mb-20pxr flex flex-col px-24pxr">
      <Link
        key={course.course_id}
        href={`/home/details/${course.course_id}`}
        passHref
        className="flex cursor-pointer flex-col gap-20pxr">
        <section className="flex flex-col items-start gap-4pxr">
          <p className="fonts-recommendTitle">{course.name}</p>
          <p className="fonts-detail">{course.area}</p>
        </section>
        <figure className="relative flex h-148pxr w-345pxr overflow-hidden rounded-xl">
          <Image
            fill
            src={course.image || '/courseExample.png'}
            alt={course.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority
          />
        </figure>
      </Link>
      <button type="button" className="absolute right-24pxr top-3pxr cursor-pointer" onClick={handleSaveClick}>
        {isSaved ? <SearchSaveFilledIcon /> : <SearchSaveOutlineIcon />}
      </button>
    </section>
  );
}
