import { Request, Response } from "express";
import { listAllUsersService } from "../../services";

export const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listAllUsersService();

  return res.status(200).json(users);
};
