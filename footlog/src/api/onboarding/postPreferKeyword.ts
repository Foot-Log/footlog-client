import api from './api';
import { Response } from 'types/common/Response';

export interface PostPreferKeywordDataTypes {
  firstOnboardingState: string[];
  secondOnboardingState: string[];
  thirdOnboardingState: string[];
}

export async function postPreferKeyword(props: PostPreferKeywordDataTypes): Promise<Response<any>> {
  const { firstOnboardingState, secondOnboardingState, thirdOnboardingState } = props;

  return await api.post(`/recommend/course`, {
    firstOnboardingState,
    secondOnboardingState,
    thirdOnboardingState,
  });
}
