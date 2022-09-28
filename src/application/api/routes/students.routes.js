import { Router } from "express";
import { studentsController } from "../controllers/Students/index.js";

const studentsRouter = Router();

studentsRouter.get("/vini", (req, res) => studentsController.getVini(req, res));

export { studentsRouter };
