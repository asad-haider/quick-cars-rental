export interface IResponse<T> {
  Result: T;
  Code: number;
  Message: string;
  UserBlocked: number;
  pages: number;
  token: string;
}
