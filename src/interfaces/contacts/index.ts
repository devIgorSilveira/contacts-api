import { ICreateUserResponse } from "../users";

export interface ICreateContactBody {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface IContactResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  createdAt: Date;
  user: ICreateUserResponse;
}

export interface IContactWithoutUserResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  createdAt: Date;
}
