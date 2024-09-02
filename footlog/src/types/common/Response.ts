export interface Response<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  result: T;
}