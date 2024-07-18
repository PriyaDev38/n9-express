import { Router } from "express";
import {
  createTraineeController,
  readSpecificTraineeController,
  readSpecificTraineeIdControllerOne,
  readSpecificTraineeIdDeleteControllerOne,
  readTraineeController,
} from "../controllers/traineeController.js";

let traineeRouter = Router();
traineeRouter
  .route("/")
  .post(createTraineeController)
  .get(readTraineeController);
traineeRouter
  .route("/:id")
  .get(readSpecificTraineeController)
  .patch(readSpecificTraineeIdControllerOne)
  .delete(readSpecificTraineeIdDeleteControllerOne);

export default traineeRouter;
