export interface loginResProps {
  isSuccess: boolean;
  code: string;
  message: string;
  data: { accessToken: string; refreshToken: string };
}

export interface loginErrorProps {
  isSuccess: boolean;
  code: string;
  message: string;
  data: { accessToken: string; refreshToken: string };
}
