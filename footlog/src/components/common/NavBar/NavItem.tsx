'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavBarIconsDataTypes } from 'types/CommonTypes';

export default function NavItem(props: NavBarIconsDataTypes) {
  const { name, path, defaultIcon, activeIcon } = props;
  const pathname: string | null = usePathname();

  const isActive = pathname === path || pathname.startsWith(path);
  const IconComponent = isActive ? activeIcon : defaultIcon;

  return (
    <Link href={path} className="flex cursor-pointer flex-col items-center gap-4pxr">
      <IconComponent />
      <span className="fonts-navBar flex" style={{ color: isActive ? '#333333' : '#808080' }}>
        {name}
      </span>
    </Link>
  );
}
