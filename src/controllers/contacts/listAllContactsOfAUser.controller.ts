import { Request, Response } from "express";
import { listAllContactsOfAUserService } from "../../services";

export const listAllContactsOfAUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts = await listAllContactsOfAUserService(req.user.id as string);

  return res.status(200).json(contacts);
};
