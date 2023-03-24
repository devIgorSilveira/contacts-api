import "express-async-errors";
import express from "express";
import { contactRouter, sessionRouter, usersRouter } from "./routes";
import { errorHandler } from "./errors/error";
import cors from "cors";

export const app = express();
app.use(express.json());

app.use(cors());

app.use("/users", usersRouter);
app.use("/login", sessionRouter);
app.use("/contacts", contactRouter);

app.use(errorHandler);
