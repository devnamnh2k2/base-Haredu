import { USER_ROLE } from '#utils/const';

export interface IAccount {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  role: USER_ROLE;
  isActive: boolean;
  deletedAt?: Date | null;
  status: boolean;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  user: IAccount;
}

export interface IChangePassword {
  oldPassword?: string;
  password: string;
  confirm: string;
  token?: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
  code?: string;
}

export interface IRenewResponse {
  token: string;
}
