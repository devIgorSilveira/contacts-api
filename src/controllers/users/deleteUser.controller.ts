import { Request, Response } from "express";
import { deleteUserService } from "../../services";

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(req.params.id, req.user.id as string);

  return res.status(204).json({});
};
