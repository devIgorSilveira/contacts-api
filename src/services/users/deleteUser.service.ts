import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { AppError } from "../../errors/error";

export const deleteUserService = async (
  userId: string,
  tokenId: string
): Promise<object> => {
  if (userId != tokenId) {
    throw new AppError("You can't do that", 401);
  }

  const userRepo = AppDataSource.getRepository(User);

  await userRepo.delete(userId);

  return {};
};
