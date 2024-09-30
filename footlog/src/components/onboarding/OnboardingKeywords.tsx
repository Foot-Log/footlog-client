import { OnboardingIconsDataTypes } from 'types/onboarding/OnboardingTypes';

interface OnboardingKeywordsProps {
  iconsData: OnboardingIconsDataTypes[];
  selectedKeywords: string[];
  onKeywordSelect: (keyword: string) => void;
}

export default function OnboardingKeywords(props: OnboardingKeywordsProps) {
  const { iconsData, selectedKeywords, onKeywordSelect } = props;

  return (
    <section className="flex justify-between">
      {iconsData.map(({ keyword, defaultIcon, strokeIcon }) => {
        const isSelected = selectedKeywords.includes(keyword);
        const IconComponent = isSelected ? strokeIcon : defaultIcon;

        return (
          <div
            key={keyword}
            className="flex cursor-pointer flex-col items-center gap-8pxr"
            onClick={() => onKeywordSelect(keyword)}>
            <IconComponent />
            <span className={`fonts-onboardingKeyword flex ${isSelected ? 'text-main-green' : 'text-gray-4'}`}>
              {keyword}
            </span>
          </div>
        );
      })}
    </section>
  );
}
