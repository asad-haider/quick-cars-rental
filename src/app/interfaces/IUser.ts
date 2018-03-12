export interface IUser {
  id: number;
  name: string;
  fname: string;
  lname: string;
  email: string;
  username: string;
  active: number;
  phone?: string;
  city?: string;
  country?: string;
  confirmation_code: string;
  confirmed: number;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}
