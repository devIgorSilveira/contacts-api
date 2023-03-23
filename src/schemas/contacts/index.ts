import * as yup from "yup";
import {
  ICreateContactBody,
  IContactResponse,
  IContactWithoutUserResponse,
} from "../../interfaces/contacts";
import { createUserResponseSchema } from "../users";

export const createContactBodySchema: yup.Schema<ICreateContactBody> = yup
  .object()
  .shape({
    first_name: yup.string().required().max(127),
    last_name: yup.string().required().max(127),
    email: yup.string().email().required().max(127),
    phone: yup.string().required().min(11).max(11),
  });

export const contactResponseSchema: yup.Schema<IContactResponse> = yup
  .object()
  .shape({
    user: createUserResponseSchema,
    createdAt: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().required().email().required(),
    last_name: yup.string().required(),
    first_name: yup.string().required(),
    id: yup.string().required(),
  });

export const contactResponseWithoutUSerSchema: yup.Schema<IContactWithoutUserResponse> =
  yup.object().shape({
    createdAt: yup.date().required(),
    phone: yup.string().required(),
    email: yup.string().required().email().required(),
    last_name: yup.string().required(),
    first_name: yup.string().required(),
    id: yup.string().required(),
  });

export const contactArraySchema: yup.Schema<
  IContactWithoutUserResponse[] | undefined
> = yup.array(contactResponseWithoutUSerSchema);
