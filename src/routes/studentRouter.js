import { Router } from "express";
import {
  createStudentController,
  readSpecificStudentController,
  readSpecificStudentIdControllerTwo,
  readSpecificStudentIdDeleteControllerTwo,
  readStudentController,
} from "../controllers/studentController.js";

let studentRouter = Router();
studentRouter
  .route("/")
  .post(createStudentController)
  .get(readStudentController);
studentRouter
  .route("/:id")
  .get(readSpecificStudentController)
  .patch(readSpecificStudentIdControllerTwo)
  .delete(readSpecificStudentIdDeleteControllerTwo);

export default studentRouter;
