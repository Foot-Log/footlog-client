import { HomeIcon, HomeActiveIcon, LogIcon, LogActiveIcon, MypageIcon, MypageActiveIcon } from '@public/icon';
import { NavBarIconDataTypes } from 'types/CommonTypes';

export const navBarIconsData: NavBarIconDataTypes[] = [
  { name: '홈', path: '/home', defaultIcon: HomeIcon, activeIcon: HomeActiveIcon },
  { name: '로그', path: '/log', defaultIcon: LogIcon, activeIcon: LogActiveIcon },
  { name: '마이', path: '/mypage', defaultIcon: MypageIcon, activeIcon: MypageActiveIcon },
];
