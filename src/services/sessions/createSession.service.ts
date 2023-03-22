import "dotenv/config";
import { User } from "../../entities/usersEntity";
import { AppDataSource } from "../../data-source";
import { ILoginBody, ILoginResponse } from "../../interfaces/users";
import { AppError } from "../../errors/error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const createSessionService = async (
  body: ILoginBody
): Promise<ILoginResponse> => {
  const { email, password } = body;

  const userRepo = AppDataSource.getRepository(User);

  const isUserExists = await userRepo.findOneBy({ email: email });

  if (!isUserExists) {
    throw new AppError("Invalid email or password", 403);
  }

  const isPasswordMatches = await compare(password, isUserExists.password);

  if (!isPasswordMatches) {
    throw new AppError("Invalid email or password", 403);
  }

  const secretKey: string = process.env.SECRET_KEY!;

  const token = sign({ email }, secretKey, {
    expiresIn: "24h",
    subject: isUserExists.id,
  });

  return { token };
};
