import { Router } from "express";
import {
  createClassroomController,
  readSpecificClassroomController,
  readSpecificClassroomIdController,
  readSpecificClassroomIdDeleteController,
  readClassroomController,
} from "../controllers/classroomController.js";

let classroomRouter = Router();

classroomRouter
  .route("/")
  .post(createClassroomController)
  .get(readClassroomController);
classroomRouter
  .route("/:id")
  .get(readSpecificClassroomController)
  .patch(readSpecificClassroomIdController)
  .delete(readSpecificClassroomIdDeleteController);

export default classroomRouter;
