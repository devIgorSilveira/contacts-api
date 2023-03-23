import { Request, Response } from "express";
import { deleteContactService } from "../../services";

export const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteContactService(req.params.id, req.user.id as string);

  return res.status(204).json({});
};
