import "express-async-errors";
import express from "express";
import { contactRouter, sessionRouter, usersRouter } from "./routes";
import { errorHandler } from "./errors/error";

export const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/contacts", contactRouter);

app.use(errorHandler);
