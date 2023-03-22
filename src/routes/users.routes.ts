import { Router } from "express";
import { createUserController, listAllUsersController } from "../controllers";
import {
  validateBodyPerSchemaMiddleware,
  verifyAuthMiddleware,
} from "../middlewares";
import { createUserBodySchema } from "../schemas/users";

export const usersRouter = Router();

usersRouter.post(
  "",
  validateBodyPerSchemaMiddleware(createUserBodySchema),
  createUserController
);

usersRouter.get("", verifyAuthMiddleware, listAllUsersController);
