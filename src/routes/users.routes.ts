import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUserProfileController,
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

usersRouter.get("/profile", verifyAuthMiddleware, getUserProfileController);

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

usersRouter.delete(
  "/:id",
  verifyAuthMiddleware,
  validateUserIdParamMiddleware,
  deleteUserController
);
