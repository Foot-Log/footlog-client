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
