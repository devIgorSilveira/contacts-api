import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { ICreateUserResponse } from "../../interfaces/users";
import { usersArraySchema } from "../../schemas/users";

export const listAllUsersService = async (): Promise<
  ICreateUserResponse[] | undefined
> => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  const validateResponse = await usersArraySchema.validate(users, {
    stripUnknown: true,
  });

  return validateResponse;
};
