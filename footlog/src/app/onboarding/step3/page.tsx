'use client';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation';
import { LeftArrowIcon } from '@public/icon';
import OnboardingTitle from '@components/onboarding/OnboardingTitle';
import OnboardingKeywords from '@components/onboarding/OnboardingKeywords';
import OnboardingBtn from '@components/onboarding/OnboardingBtn';
import { onboardingIconsData } from '@core/onboardingIconsData';
import { firstOnboardingState, secondOnboardingState, thirdOnboardingState } from '@recoil/atom';
import usePostPreferKeyword from '@hooks/onboarding/usePostPreferKeyword';

export default function page() {
  const router = useRouter();
  const [selectedKeywords, setSelectedKeywords] = useRecoilState(thirdOnboardingState);
  const currentIcons = onboardingIconsData.slice(6, 9);

  const firstKeyword = useRecoilValue(firstOnboardingState);
  const secondKeyword = useRecoilValue(secondOnboardingState);
  const thirdKeyword = useRecoilValue(thirdOnboardingState);
  const { mutate: postPreferKeywordMutate } = usePostPreferKeyword();

  function handleBackBtn() {
    router.back();
  }

  function handleKeywordSelect(keyword: string) {
    setSelectedKeywords((prev) => {
      if (prev.includes(keyword)) {
        return prev.filter((k) => k !== keyword);
      } else {
        if (prev.length < 2) {
          return [...prev, keyword];
        }
        return prev;
      }
    });
  }

  const isOnboardingBtnDisabled = selectedKeywords.length === 0;

  function handleOnboardingBtn() {
    postPreferKeywordMutate({
      firstKeyword: firstKeyword,
      secondKeyword: secondKeyword,
      thirdKeyword: thirdKeyword,
    });
  }

  return (
    <main className="relative flex h-full w-full flex-col px-24pxr pt-10pxr">
      <button type="button" className="cursor-pointer" onClick={() => handleBackBtn()}>
        <LeftArrowIcon />
      </button>
      <OnboardingTitle
        number={3}
        text={
          <>
            다음 중 플로깅을 하면서
            <br />
            함께 즐기고 싶은 활동은?
            <br />
            (최대 2개 선택)
          </>
        }
      />
      <OnboardingKeywords
        selectedKeywords={selectedKeywords}
        onKeywordSelect={handleKeywordSelect}
        iconsData={currentIcons}
      />
      <OnboardingBtn text="완료" $disabled={isOnboardingBtnDisabled} handleOnboardingBtn={handleOnboardingBtn} />
    </main>
  );
}
