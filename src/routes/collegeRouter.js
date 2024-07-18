import { Router } from "express";
import {
  createCollegeController,
  readSpecificCollegeController,
  readSpecificCollegeIdController,
  readSpecificCollegeIdDeleteController,
  readCollegeController,
} from "../controllers/collegeController.js";

let collegeRouter = Router();

collegeRouter
  .route("/")
  .post(createCollegeController)
  .get(readCollegeController);
collegeRouter
  .route("/:id")
  .get(readSpecificCollegeController)
  .patch(readSpecificCollegeIdController)
  .delete(readSpecificCollegeIdDeleteController);

export default collegeRouter;
