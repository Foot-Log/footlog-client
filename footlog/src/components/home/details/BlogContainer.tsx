import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useGetBlogPosting from '@hooks/home/details/useGetBlogPosting';
import formatDate from '@utils/formatDate';

interface BlogContainerProps {
  title: string;
}

export default function BlogContainer(props: BlogContainerProps) {
  const { title } = props;
  const pathname = usePathname(); // 현재 경로 가져오기
  const course_id = pathname.split('/').pop(); // 경로의 마지막 세그먼트를 course_id로 사용
  const courseIdNumber = course_id ? Number(course_id) : undefined; // courseId를 숫자로 변환

  const { data: blogResponse } = courseIdNumber ? useGetBlogPosting(courseIdNumber) : { data: null };

  if (!blogResponse) {
    return <></>;
  }

  const posting = blogResponse.data;

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
                  {post.blog_name}&nbsp;&nbsp;|&nbsp;&nbsp;{formatDate(post.post_date)}{' '}
                  {/* &nbsp; 사용하여 두 칸 띄우기 */}
                </p>
              </div>
              <p className="fonts-blogTitle">{highlightSearchTerm(post.title, title)}</p>
              <p className="fonts-detail line-clamp-3">{post.summary}</p>
            </Link>
            <div className="my-20pxr h-1pxr w-full bg-gray-1" />
          </section>
        );
      })}
    </section>
  );
}
