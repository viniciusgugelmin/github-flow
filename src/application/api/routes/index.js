import { Router } from "express";
import { systemRouter } from "./system.routes.js";
import { studentsRouter } from "./students.routes.js";

const routes = Router();

if (process.env.NODE_ENV !== "production") {
  routes.use("/", systemRouter);
}

routes.use(studentsRouter);

export { routes };
