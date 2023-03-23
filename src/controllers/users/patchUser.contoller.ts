import { Request, Response } from "express";
import { patchUserService } from "../../services";

export const patchUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await patchUserService(
    req.body,
    req.params.id,
    req.user.id as string
  );

  return res.status(200).json(user);
};
