import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  listAllUsersController,
  patchUserController,
} from "../controllers";
import {
  validateBodyPerSchemaMiddleware,
  validateUserIdParamMiddleware,
  verifyAuthMiddleware,
} from "../middlewares";
import { createUserBodySchema, PatchUserBodySchema } from "../schemas/users";

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

usersRouter.patch(
  "/:id",
  verifyAuthMiddleware,
  validateUserIdParamMiddleware,
  validateBodyPerSchemaMiddleware(PatchUserBodySchema),
  patchUserController
);
