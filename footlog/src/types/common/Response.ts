export interface Response<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}
