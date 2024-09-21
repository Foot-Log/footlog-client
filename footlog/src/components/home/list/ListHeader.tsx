import { useRouter } from 'next/navigation';
import { LeftArrowIcon } from '@public/icon';
import useGetRecommend from '@hooks/home/useGetRecommend';
import useGetPopularCourse from '@hooks/common/useGetPopularCourse';

interface ListHeaderProps {
  title: string;
}

export default function ListHeader(props: ListHeaderProps) {
  const { title } = props;
  const router = useRouter();
  const { refetch: refetchRecommend } = useGetRecommend();
  const { refetch: refetchPopular } = useGetPopularCourse();

  const handleBackBtn = async () => {
    await Promise.all([refetchRecommend(), refetchPopular()]);
    router.back();
  };

  return (
    <section className="fixed top-0 z-20 flex h-68pxr w-full items-center gap-20pxr bg-white pl-24pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <h2 className="font-mypageTitle">{title}</h2>
    </section>
  );
}
