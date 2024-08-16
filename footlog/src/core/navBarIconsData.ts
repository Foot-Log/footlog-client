import { HomeIcon, HomeActiveIcon, LogIcon, LogActiveIcon, MypageIcon, MypageActiveIcon } from '@public/icon';
import { NavBarIconDataTypes } from 'types/CommonTypes';

export const navBarIconsData: NavBarIconDataTypes[] = [
  { path: '/home', defaultIcon: HomeIcon, activeIcon: HomeActiveIcon },
  { path: '/log', defaultIcon: LogIcon, activeIcon: LogActiveIcon },
  { path: '/mypage', defaultIcon: MypageIcon, activeIcon: MypageActiveIcon },
];
