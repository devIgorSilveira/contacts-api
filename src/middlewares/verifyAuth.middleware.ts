import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/error";
import { verify } from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entities/usersEntity";
import { IUserInRequest } from "../interfaces/users";

export const verifyAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Missing authorization token", 401);
  }

  token = token.split(" ")[1];

  const sercretKey: string = process.env.SECRET_KEY!;

  verify(token, sercretKey, (error, decoded) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    const id: string = decoded!.sub as string;

    req.user = {
      id: id,
    };
  });

  return next();
};
