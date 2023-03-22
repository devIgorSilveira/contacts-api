import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/usersEntity";
import { AppError } from "../errors/error";
import { validate } from "uuid";

export const validateUserIdParamMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const isValidUuid = validate(req.params.id);

  if (!isValidUuid) {
    throw new AppError("Must be a valid uuid in url", 406);
  }

  const user = await AppDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return next();
};
