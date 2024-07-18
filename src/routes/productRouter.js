import { Router } from "express";
import {
  createProductController,
  readProductController,
  readSpecificProductController,
  readSpecificProductIdControllerThree,
  readSpecificProductIdDeleteControllerThree,
} from "../controllers/productController.js";

let productRouter = Router();
productRouter
  .route("/")
  .post(createProductController)
  .get(readProductController);
productRouter
  .route("/:id")
  .get(readSpecificProductController)
  .patch(readSpecificProductIdControllerThree)
  .delete(readSpecificProductIdDeleteControllerThree);

export default productRouter;
