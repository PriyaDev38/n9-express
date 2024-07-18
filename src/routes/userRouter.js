import { Router } from "express";
import {
  createUserController,
  readSpecificUserController,
  readSpecificUserIdController,
  readSpecificUserIdDeleteController,
  readUserController,
} from "../controllers/userController.js";

let userRouter = Router();

userRouter.route("/").post(createUserController).get(readUserController);
userRouter
  .route("/:id")
  .get(readSpecificUserController)
  .patch(readSpecificUserIdController)
  .delete(readSpecificUserIdDeleteController);

// userRouter.route("/").post((req, res, next)=>{});
export default userRouter;
