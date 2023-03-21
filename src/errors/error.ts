import type { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    const message = { message: err.message };
    return res.status(err.statusCode).json(message);
  }

  console.error(err);
  return res.status(500).json({ message: "Internal Server Error." });
};
