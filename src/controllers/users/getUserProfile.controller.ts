import { Request, Response } from "express";
import { getUserProfileService } from "../../services";

export const getUserProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getUserProfileService(req.user.id as string);

  return res.status(200).json(user);
};
