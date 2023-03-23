import { hash, hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { AppError } from "../../errors/error";
import { ICreateUserResponse, IPatchUserBody } from "../../interfaces/users";
import { createUserResponseSchema } from "../../schemas/users";

export const patchUserService = async (
  body: IPatchUserBody,
  userId: string,
  tokenId: string
): Promise<ICreateUserResponse> => {
  if (userId != tokenId) {
    throw new AppError("You can't do that", 401);
  }

  const userRepo = AppDataSource.getRepository(User);

  let user = await userRepo.findOneBy({ id: userId });

  const newData = {
    first_name: body.first_name
      ? body.first_name
      : (user?.first_name as string),
    last_name: body.last_name ? body.last_name : (user?.last_name as string),
    email: body.email ? body.email : (user?.email as string),
    password: body.password
      ? hashSync(body.password, 10)
      : (user?.password as string),
    phone: body.phone ? body.phone : (user?.phone as string),
  };

  user = await userRepo.save({ id: userId, ...newData });

  user = await userRepo.findOneBy({ id: userId });

  const validateResponse = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
  });

  return validateResponse;
};
