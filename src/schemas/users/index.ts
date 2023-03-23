import * as yup from "yup";
import {
  ICreateUserBody,
  ICreateUserResponse,
  IPatchUserBody,
} from "../../interfaces/users";

export const createUserBodySchema: yup.Schema<ICreateUserBody> = yup
  .object()
  .shape({
    first_name: yup.string().required().max(127),
    last_name: yup.string().required().max(127),
    email: yup.string().email().required().max(127),
    password: yup.string().required().max(150),
    phone: yup.string().required().min(11).max(11),
  });

export const createUserResponseSchema: yup.Schema<ICreateUserResponse> = yup
  .object()
  .shape({
    createdAt: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().required().email().required(),
    last_name: yup.string().required(),
    first_name: yup.string().required(),
    id: yup.string().required(),
  });

export const usersArraySchema: yup.Schema<ICreateUserResponse[] | undefined> =
  yup.array(createUserResponseSchema);

export const PatchUserBodySchema: yup.Schema<IPatchUserBody> = yup
  .object()
  .shape({
    first_name: yup.string().max(127),
    last_name: yup.string().max(127),
    email: yup.string().email().max(127),
    password: yup.string().max(150),
    phone: yup.string().min(11).max(11),
  });
