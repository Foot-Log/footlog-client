import { OnboardingIconDataTypes } from 'types/CommonTypes';

interface OnboardingKeywordsProps {
  iconsData: OnboardingIconDataTypes[]; // 아이콘 데이터 타입
  selectedKeywords: string[];
  onKeywordSelect: (keyword: string) => void;
}

export default function OnboardingKeywords(props: OnboardingKeywordsProps) {
  const { iconsData, selectedKeywords, onKeywordSelect } = props;

  return (
    <section className="flex gap-[22.5px]">
      {iconsData.map(({ keyword, defaultIcon, strokeIcon }) => {
        const isSelected = selectedKeywords.includes(keyword);
        const IconComponent = isSelected ? strokeIcon : defaultIcon; // 선택된 경우 스테로크 아이콘 사용

        return (
          <div key={keyword} className="flex flex-col items-center gap-0.5" onClick={() => onKeywordSelect(keyword)}>
            <IconComponent />
            <span className="flex fonts-onboardingKeyword">{keyword}</span>
          </div>
        );
      })}
    </section>
  );
}
