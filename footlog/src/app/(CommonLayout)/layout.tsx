import NavBar from '@components/common/NavBar/NavBar';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="children-container">
      {children}
      <NavBar />
    </div>
  );
}
