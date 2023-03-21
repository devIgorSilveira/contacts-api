import express from "express";
import { usersRouter } from "./routes";
import "express-async-errors";
import { errorHandler } from "./errors/error";

export const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.use(errorHandler);
