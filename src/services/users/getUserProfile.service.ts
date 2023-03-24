import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { ICreateUserResponse } from "../../interfaces/users";
import { createUserResponseSchema } from "../../schemas/users";

export const getUserProfileService = async (
  tokenId: string
): Promise<ICreateUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: tokenId });

  const validateReponse = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateReponse;
};
