'use client';
import { navBarIconsData } from '@core/navBarIconsData';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <section className="z-100 px-60pxr pt-16pxr pb-6pxr absolute bottom-0 flex w-full items-center justify-between bg-white shadow-navBar">
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
