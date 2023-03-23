import { Router } from "express";
import { createContactController } from "../controllers";
import {
  validateBodyPerSchemaMiddleware,
  verifyAuthMiddleware,
} from "../middlewares";
import { createContactBodySchema } from "../schemas/contacts";

export const contactRouter = Router();

contactRouter.post(
  "",
  verifyAuthMiddleware,
  validateBodyPerSchemaMiddleware(createContactBodySchema),
  createContactController
);
