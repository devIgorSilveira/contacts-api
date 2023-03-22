import * as yup from "yup";
import { ILoginBody } from "../../interfaces/users";

export const loginBodySchema: yup.Schema<ILoginBody> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
