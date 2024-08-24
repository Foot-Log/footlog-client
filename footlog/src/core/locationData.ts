import courseExampleImg from '@public/courseExample.png';
import { LocationDataTypes } from 'types/common/CommonTypes';

export const locationData: LocationDataTypes[] = [
  {
    id: 1,
    name: '문경새재 도립공원',
    address: '경상북도 문경시 문경읍 새재로 932',
    imgSrc: courseExampleImg,
    isSaved: true,
  },
  {
    id: 2,
    name: '문경새재 용추계곡',
    address: '경상북도 문경시 가은읍 완장리',
    imgSrc: courseExampleImg,
    isSaved: false,
  },
  { id: 3, name: '설악산 국립공원', address: '강원 인제군 북면 한계리', imgSrc: courseExampleImg, isSaved: true },
  { id: 4, name: '설악산 약사암', address: '서울 강동구 성안로27길 53', imgSrc: courseExampleImg, isSaved: false },
  { id: 5, name: '한라산', address: '제주 서귀포시 토평동 산15-1', imgSrc: courseExampleImg, isSaved: true },
  { id: 6, name: '북한산', address: '경기 고양시 덕양구 서문길 375', imgSrc: courseExampleImg, isSaved: false },
  {
    id: 7,
    name: '북한산국립공원북한산성코스',
    address: '경기 고양시 덕양구 북한동',
    imgSrc: courseExampleImg,
    isSaved: true,
  },
  { id: 8, name: '계룡산국립공원', address: '충남 공주시 동학사1로 474', imgSrc: courseExampleImg, isSaved: false },
  {
    id: 9,
    name: '대둔산도립공원',
    address: '전북 완주군 운주면 산북리 산15-24',
    imgSrc: courseExampleImg,
    isSaved: true,
  },
  {
    id: 10,
    name: '속리산국립공원',
    address: '경북 상주시 화부견 중벌리 산36-6',
    imgSrc: courseExampleImg,
    isSaved: false,
  },
];
