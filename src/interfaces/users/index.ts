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
