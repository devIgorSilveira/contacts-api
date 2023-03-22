import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  listAllUsersController,
} from "../controllers";
import {
  validateBodyPerSchemaMiddleware,
  validateUserIdParamMiddleware,
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

usersRouter.get(
  "/:id",
  verifyAuthMiddleware,
  validateUserIdParamMiddleware,
  getUserByIdController
);
