import * as express from "express";
import { IUserInRequest } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      user: IUserInRequest;
    }
  }
}
export {};
