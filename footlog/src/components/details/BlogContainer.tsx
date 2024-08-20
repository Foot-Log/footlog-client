import { BlogPostingDataTypes } from 'types/CommonTypes';
import { blogPostingData } from '@core/blogPostingData';
import Link from 'next/link';

interface BlogContainerProps {
  title: string;
}

export default function BlogContainer(props: BlogContainerProps) {
  const { title } = props;
  const posting: BlogPostingDataTypes[] = blogPostingData;

  return (
    <section className="flex w-full flex-col px-24pxr">
      <p className="fonts-recommendTitle py-20pxr">관련 포스팅</p>
      {posting.map((post, index) => {
        // title이 post.title에 포함되는지 확인
        const titleIndex = post.title.indexOf(title);
        const isTitleMatched = titleIndex !== -1;

        return (
          <section key={index}>
            <Link href={post.link} className="flex flex-col gap-8pxr">
              <div className="flex">
                <p className="fonts-detail">{post.writer}</p>
                <p className="fonts-detail">{post.date}</p>
              </div>
              <p className="fonts-blogTitle">
                {isTitleMatched ? (
                  <>
                    {post.title.slice(0, titleIndex)} {/* 제목 앞부분 */}
                    <span className="text-main-green">{title}</span> {/* 강조할 부분 */}
                    {post.title.slice(titleIndex + title.length)} {/* 제목 뒷부분 */}
                  </>
                ) : (
                  post.title // 일치하지 않을 경우 전체 제목 출력
                )}
              </p>
              <p className="fonts-detail line-clamp-3">{post.description}</p>
            </Link>
            <div className="my-20pxr h-1pxr w-full bg-gray_1" />
          </section>
        );
      })}
    </section>
  );
}
