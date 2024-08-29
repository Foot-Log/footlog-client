import { usePostLogin } from '@hooks/login/usePostLogin';

export default function page() {
  usePostLogin();
  return <div></div>;
}
