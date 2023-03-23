import { Router } from "express";
import {
  createContactController,
  listAllContactsOfAUserController,
} from "../controllers";
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

contactRouter.get("", verifyAuthMiddleware, listAllContactsOfAUserController);
