import { Request, Response } from "express";
import { patchContactService } from "../../services";

export const patchContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact = await patchContactService(
    req.body,
    req.params.id,
    req.user.id as string
  );

  return res.status(200).json(contact);
};
