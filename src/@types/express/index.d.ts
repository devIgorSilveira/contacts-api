import * as express from "express";
import { User } from "../../entities/usersEntity";

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}
export {};
