import { BlogPostingDataTypes } from 'types/home/details/DetailsTypes';
import { blogPostingData } from '@core/blogPostingData';
import Link from 'next/link';

interface BlogContainerProps {
  title: string;
}

export default function BlogContainer(props: BlogContainerProps) {
  const { title } = props;
  const posting: BlogPostingDataTypes[] = blogPostingData;

  // 제목에서 코스 이름을 강조하는 함수
  const highlightSearchTerm = (text: string, search: string) => {
    if (!search) return <span>{text}</span>; // 코스 이름 없으면 원래 텍스트 반환

    const regex = new RegExp(`(${search})`, 'gi'); // 대소문자를 구분하지 않도록 정규 표현식 생성
    const parts = text.split(regex); // 텍스트를 코스 이름으로 분리

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="text-main-green">
          {part}
        </span> // 강조할 부분
      ) : (
        part // 원래 텍스트
      ),
    );
  };

  return (
    <section className="flex w-full flex-col px-24pxr">
      <p className="fonts-recommendTitle py-20pxr">관련 포스팅</p>
      {posting.map((post, index) => {
        return (
          <section key={index}>
            <Link href={post.link} className="flex flex-col gap-8pxr">
              <div className="flex">
                <p className="fonts-detail">
                  {post.writer}&nbsp;&nbsp;|&nbsp;&nbsp;{post.date} {/* &nbsp; 사용하여 두 칸 띄우기 */}
                </p>
              </div>
              <p className="fonts-blogTitle">{highlightSearchTerm(post.title, title)}</p>
              <p className="fonts-detail line-clamp-3">{post.description}</p>
            </Link>
            <div className="my-20pxr h-1pxr w-full bg-gray-1" />
          </section>
        );
      })}
    </section>
  );
}
