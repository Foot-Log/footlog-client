'use client';
import { navBarIconsData } from '@core/navBarIconsData';
import NavItem from './NavItem';

export default function NavBar() {
  return (
    <section className="shadow-navBar absolute bottom-0 flex h-[67px] w-full items-center justify-around">
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
