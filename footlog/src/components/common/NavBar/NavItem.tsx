'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavBarIconDataTypes } from 'types/CommonTypes';

export default function NavItem(props: NavBarIconDataTypes) {
  const { name, path, defaultIcon, activeIcon, isActive } = props;
  const pathname: string | null = usePathname();

  const IconComponent = isActive ? activeIcon : defaultIcon;

  return (
    <Link href={path} className="flex cursor-pointer flex-col items-center gap-1">
      <IconComponent />
      <span className="fonts-navBar" style={{ color: isActive ? '#333333' : '#808080' }}>
        {name}
      </span>
    </Link>
  );
}
