import { Router } from "express";
import { createSessionController } from "../controllers";
import { validateBodyPerSchemaMiddleware } from "../middlewares";
import { loginBodySchema } from "../schemas/sessions";

export const sessionRouter = Router();

sessionRouter.post(
  "",
  validateBodyPerSchemaMiddleware(loginBodySchema),
  createSessionController
);
