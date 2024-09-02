export interface loginResProps {
  isSuccess: boolean;
  code: string;
  message: string;
  result: { accessToken: string; refreshToken: string };
}

export interface loginErrorProps {
  isSuccess: boolean;
  code: string;
  message: string;
  result: { accessToken: string; refreshToken: string };
}
