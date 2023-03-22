import { Router } from "express";
import { createUserController } from "../controllers";
import { validateBodyPerSchemaMiddleware } from "../middlewares";
import { createUserBodySchema } from "../schemas/users";
export const usersRouter = Router();

usersRouter.post(
  "",
  validateBodyPerSchemaMiddleware(createUserBodySchema),
  createUserController
);
