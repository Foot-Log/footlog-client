'use client';
import { recommendCoursesData } from '@core/recommendCoursesData';
import DetailsHeader from '@components/details/DetailsHeader';

interface DetailsPageProps {
  params: { id: string };
}

export default function page(props: DetailsPageProps) {
  const { params } = props;

  // params.id를 숫자로 변환 후 추천 코스 데이터에서 해당 코스를 찾기
  // 나중에 api 연결할 부분
  const courseId = parseInt(params.id, 10);
  const course = recommendCoursesData.find((course) => course.id === courseId);

  if (!course) {
    return <p>코스 정보 없음</p>;
  }

  return (
    <main className="relative flex h-full w-full flex-col">
      <DetailsHeader title={course.title} isSaved={course.isSaved} />
    </main>
  );
}
