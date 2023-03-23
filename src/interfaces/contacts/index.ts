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

export interface IPatchContactBody {
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
}
