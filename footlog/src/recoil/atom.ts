'use client';
import { atom } from 'recoil';

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
