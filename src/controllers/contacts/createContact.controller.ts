import { Request, Response } from "express";
import { createContactService } from "../../services";

export const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await createContactService(req.body, req.user.id as string);

  return res.status(201).json(contact);
};
