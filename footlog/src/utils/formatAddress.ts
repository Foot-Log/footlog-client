export default function formatAddress(address: string) {
  const words = address.split(' ');
  if (words.length >= 2) {
    return `${words[0]} ${words[1]}`;
  }
  return address; // 두 단어가 없으면 원본 주소
}
