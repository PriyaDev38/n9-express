import { Router } from "express";
import {
  createBookController,
  readBookController,
  readSpecificBookController,
  readSpecificBookIdControllerFour,
  readSpecificBookIdDeleteControllerFour,
} from "../controllers/bookController.js";

let bookRouter = Router();
bookRouter.route("/").post(createBookController).get(readBookController);
bookRouter
  .route("/:id")
  .get(readSpecificBookController)
  .patch(readSpecificBookIdControllerFour)
  .delete(readSpecificBookIdDeleteControllerFour);

export default bookRouter;
