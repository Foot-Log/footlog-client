'use client';
import SearchHeader from '@components/home/search/SearchHeader';
import RecentSearchContainer from '@components/home/search/RecentSearchContainer';
import RecentCourseContainer from '@components/home/search/RecentCourseContainer';
import PopularContainer from '@components/home/search/PopularContainer';

export default function page() {
  return (
    <main className="relative flex h-full w-full flex-col">
      <SearchHeader />
      <section className="mt-68pxr flex flex-col overflow-y-auto">
        <RecentSearchContainer />
        <RecentCourseContainer />
        <PopularContainer />
      </section>
    </main>
  );
}
