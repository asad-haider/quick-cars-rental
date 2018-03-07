export interface IUser {
  id: number;
  name: string;
  email: string;
  active: number;
  confirmation_code: string;
  confirmed: number;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
