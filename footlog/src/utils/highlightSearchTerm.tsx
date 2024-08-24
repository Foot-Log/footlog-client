// 검색어가 있을 때 강조할 텍스트 생성
export const highlightSearchTerm = (text: string, search: string) => {
  if (!search) return <span>{text}</span>; // 검색어가 없으면 원래 텍스트 반환

  const regex = new RegExp(`(${search})`, 'gi'); // 대소문자를 구분하지 않도록 정규 표현식 생성
  const parts = text.split(regex); // 텍스트를 검색어로 분리

  return parts.map((part, index) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <span key={index} className="fonts-onboardingBtn text-main-green">
        {part}
      </span> // 강조할 부분
    ) : (
      part // 원래 텍스트
    ),
  );
};
