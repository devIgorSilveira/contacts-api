import { Request, Response } from "express";
import { getContactByIdService } from "../../services";

export const getContactByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await getContactByIdService(req.params.id);

  return res.status(200).json(contact);
};
