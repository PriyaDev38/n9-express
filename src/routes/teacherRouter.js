import { Router } from "express";
import {
  createTeacherController,
  readSpecificTeacherController,
  readSpecificTeacherIdController,
  readSpecificTeacherIdDeleteController,
  readTeacherController,
} from "../controllers/teacherController.js";

let teacherRouter = Router();

teacherRouter
  .route("/")
  .post(createTeacherController)
  .get(readTeacherController);
teacherRouter
  .route("/:id")
  .get(readSpecificTeacherController)
  .patch(readSpecificTeacherIdController)
  .delete(readSpecificTeacherIdDeleteController);

export default teacherRouter;
