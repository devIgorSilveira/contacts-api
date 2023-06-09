export interface ICreateUserBody {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface ICreateUserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IUserInRequest {
  id: string | undefined;
}

export interface IPatchUserBody {
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  phone?: string | undefined;
}
