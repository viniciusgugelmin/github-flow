import { StudentsController } from "./StudentsController.js";
import { getViniDataUseCase } from "../../../../useCases/GetViniData/index.js";

const studentsController = new StudentsController(getViniDataUseCase);

export { studentsController };
