'use client';
import { navBarIconsData } from '@core/navBarIconsData';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <section className="z-100 h-67pxr absolute bottom-0 flex w-full items-center justify-around bg-white shadow-navBar">
      {navBarIconsData.map((navItem) => (
        <NavItem
          name={navItem.name}
          key={navItem.path}
          defaultIcon={navItem.defaultIcon}
          activeIcon={navItem.activeIcon}
          path={navItem.path}
        />
      ))}
    </section>
  );
}
