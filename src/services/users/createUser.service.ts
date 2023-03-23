import { User } from "../../entities/usersEntity";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { ICreateUserBody, ICreateUserResponse } from "../../interfaces/users";
import { createUserResponseSchema } from "../../schemas/users";
import { AppError } from "../../errors/error";

export const createUserService = async (
  body: ICreateUserBody
): Promise<ICreateUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);

  const isExistsEmail = await userRepo.findOneBy({ email: body.email });

  if (isExistsEmail) {
    throw new AppError("Email already registered", 409);
  }

  body.password = await hash(body.password, 10);
  const user = await userRepo.save(body);

  const validateResponse = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
