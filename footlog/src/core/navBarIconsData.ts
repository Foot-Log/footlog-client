import { HomeIcon, HomeActiveIcon, LogIcon, LogActiveIcon, MypageIcon, MypageActiveIcon } from '@public/icon';
import { NavBarIconsDataTypes } from 'types/common/CommonTypes';

export const navBarIconsData: NavBarIconsDataTypes[] = [
  { name: '홈', path: '/home', defaultIcon: HomeIcon, activeIcon: HomeActiveIcon },
  { name: '로그', path: '/log', defaultIcon: LogIcon, activeIcon: LogActiveIcon },
  { name: '마이', path: '/mypage', defaultIcon: MypageIcon, activeIcon: MypageActiveIcon },
];
