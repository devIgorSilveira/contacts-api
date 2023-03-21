import { User } from "../../entities/usersEntity";
import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/error";

export const CreateUserService = async (body: object) => {
  const userRepo = AppDataSource.getRepository(User);

  const newUser = userRepo.create(body);
  const hashedPassword = await hash(newUser.password, 10);
  newUser.password = hashedPassword;
  const user = await userRepo.save(newUser);

  return user;
};
