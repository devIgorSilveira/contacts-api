import { Request, Response, NextFunction } from "express";
import { AnySchema, ValidationError } from "yup";
import { AppError } from "../errors/error";

export const validateBodyPerSchemaMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validate = await schema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.body = validate;

      return next();
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new AppError(err.errors.join(", "), 401);
      }
    }
  };
