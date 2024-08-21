import { BlogPostingDataTypes } from 'types/CommonTypes';
import { blogPostingData } from '@core/blogPostingData';

export default function BlogContainer() {
  const posting: BlogPostingDataTypes[] = blogPostingData;

  return (
    <section className="flex w-full flex-col px-24pxr">
      <p className="fonts-recommendTitle py-20pxr">관련 포스팅</p>
      {posting.map((post, index) => (
        <section key={index}>
          <section className="flex flex-col gap-8pxr">
            <div className="flex">
              <p className="fonts-detail">{post.writer}</p>
              <p className="fonts-detail">{post.date}</p>
            </div>
            <p className="fonts-blogTitle">{post.title}</p>
            <p className="fonts-detail line-clamp-3">{post.description}</p>
          </section>
          <div className="my-20pxr h-1pxr w-full bg-gray-1" />
        </section>
      ))}
    </section>
  );
}
