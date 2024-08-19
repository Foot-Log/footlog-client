import courseExampleImg from '@public/courseExample.png';
import { CourseDetailsDataTypes } from 'types/CommonTypes';

export const courseDetailsData: CourseDetailsDataTypes[] = [
  {
    id: 1,
    title: '문경새재 도립공원',
    isSaved: true,
    imgSrc: courseExampleImg,
    location: '경상북도 문경시 문경읍 새재로 932',
    price: '각 프로그램별로 이용요금 상이',
    time: '09:00 ~ 18:00',
    call: '064-784-9445',
    site: '홈페이지 / 웹사이트 URL',
    isComplete: true,
  },
];
