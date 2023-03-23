import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contactsEntity";
import { AppError } from "../errors/error";
import { validate } from "uuid";

export const validateContactIdParamMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const isValidUuid = validate(req.params.id);

  if (!isValidUuid) {
    throw new AppError("Must be a valid uuid in url", 406);
  }

  const contact = await AppDataSource.getRepository(Contact).findOneBy({
    id: req.params.id,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
