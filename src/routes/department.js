import { Router } from "express";
import {
  createDepartmentController,
  readSpecificDepartmentController,
  readSpecificDepartmentIdController,
  readSpecificDepartmentIdDeleteController,
  readDepartmentController,
} from "../controllers/departmentController.js";

let departmentRouter = Router();

departmentRouter
  .route("/")
  .post(createDepartmentController)
  .get(readDepartmentController);
departmentRouter
  .route("/:id")
  .get(readSpecificDepartmentController)
  .patch(readSpecificDepartmentIdController)
  .delete(readSpecificDepartmentIdDeleteController);

export default departmentRouter;
