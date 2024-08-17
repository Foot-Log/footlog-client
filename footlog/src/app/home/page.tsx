import NavBar from '@components/common/NavBar/NavBar';
import HomeHeader from '@components/home/HomeHeader';

export default function page() {
  return (
    <main className="relative flex h-full w-full flex-col">
      <NavBar />
      <HomeHeader />
    </main>
  );
}
