interface OnboardingKeywordsProps {
  images: React.FC[]; // 컴포넌트 배열로 정의
  keywords: string[]; // 문자열 배열로 정의
}

export default function OnboardingKeywords(props: OnboardingKeywordsProps) {
  const { images, keywords } = props;

  return (
    <section className="flex gap-[22.5px]">
      {keywords.map((keyword, index) => {
        const IconComponent = images[index];

        return (
          <div key={index} className="flex flex-col items-center gap-0.5">
            {IconComponent ? <IconComponent /> : null}
            <span className="flex fonts-onboardingKeyword">{keyword}</span>
          </div>
        );
      })}
    </section>
  );
}
