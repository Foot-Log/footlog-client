export default function formatDate(date: string) {
  // 연도, 월, 일 추출
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  // 원하는 형식으로 반환
  return `${year}.${month}.${day}.`;
}
