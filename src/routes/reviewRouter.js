import { Router } from "express";
import {
  createReviewController,
  readSpecificReviewController,
  readSpecificReviewIdController,
  readSpecificReviewIdDeleteController,
  readReviewController,
} from "../controllers/reviewController.js";

let reviewRouter = Router();

reviewRouter.route("/").post(createReviewController).get(readReviewController);
reviewRouter
  .route("/:id")
  .get(readSpecificReviewController)
  .patch(readSpecificReviewIdController)
  .delete(readSpecificReviewIdDeleteController);

export default reviewRouter;
