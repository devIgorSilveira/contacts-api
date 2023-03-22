import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { ICreateUserResponse } from "../../interfaces/users";
import { createUserResponseSchema } from "../../schemas/users";

export const getUserByIdService = async (
  userId: string
): Promise<ICreateUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: userId });

  const validateResponse = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
