'use client';
import { atom } from 'recoil';

/*온보딩 정보 post를 위한*/
export const firstOnboardingState = atom<string[]>({
  key: 'firstOnboardingState',
  default: [],
});

export const secondOnboardingState = atom<string[]>({
  key: 'secondOnboardingState',
  default: [],
});

export const thirdOnboardingState = atom<string[]>({
  key: 'thirdOnboardingState',
  default: [],
});

// 선호도 코스 저장
import { CourseResponseDtoDataTypes } from 'types/common/CommonTypes';
export const courseState = atom<CourseResponseDtoDataTypes[]>({
  key: 'courseState',
  default: [],
});
