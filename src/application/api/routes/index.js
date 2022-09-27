import { Router } from "express";
import { systemRouter } from "./system.routes.js";

const routes = Router();

if (process.env.NODE_ENV !== "production") {
  routes.use("/", systemRouter);
}

export { routes };
