import { Router } from "express";
import {
  createContactController,
  getContactByIdController,
  listAllContactsOfAUserController,
  patchContactController,
} from "../controllers";
import {
  validateBodyPerSchemaMiddleware,
  validateContactIdParamMiddleware,
  verifyAuthMiddleware,
} from "../middlewares";
import {
  createContactBodySchema,
  PatchContactBodySchema,
} from "../schemas/contacts";

export const contactRouter = Router();

contactRouter.post(
  "",
  verifyAuthMiddleware,
  validateBodyPerSchemaMiddleware(createContactBodySchema),
  createContactController
);

contactRouter.get("", verifyAuthMiddleware, listAllContactsOfAUserController);

contactRouter.get(
  "/:id",
  verifyAuthMiddleware,
  validateContactIdParamMiddleware,
  getContactByIdController
);

contactRouter.patch(
  "/:id",
  verifyAuthMiddleware,
  validateContactIdParamMiddleware,
  validateBodyPerSchemaMiddleware(PatchContactBodySchema),
  patchContactController
);
