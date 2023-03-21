import { Request, Response } from "express";
import { CreateUserService } from "../../services";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await CreateUserService(req.body);

  return res.status(201).json(user);
};
