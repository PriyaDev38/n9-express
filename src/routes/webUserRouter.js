import { Router } from "express";
import {
  createWebUserController,
  deleteWebUserController,
  forgotPassword,
  loginWebUser,
  myProfile,
  readSpecificWebUserController,
  readWebUserController,
  resetPassword,
  updatePassword,
  updateProfile,
  updateSpecificWebUseController,
  verifyEmail,
} from "../controllers/webuserController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import isAuthorization from "../middleware/isAuthorization.js";

let WebUserRouter = Router();

WebUserRouter.route("/")
  .post(createWebUserController)
  .get(
    isAuthenticated,
    isAuthorization(["admin", "superAdmin"]),
    readWebUserController
  );
WebUserRouter.route("/verify-email").post(verifyEmail);
WebUserRouter.route("/login").post(loginWebUser);
WebUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
WebUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile);
WebUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
WebUserRouter.route("/forgot-password").post(forgotPassword);
WebUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);

// Dynamic Routes
WebUserRouter.route("/:id").get(
  isAuthenticated,
  isAuthorization(["admin", "superAdmin"]),
  readSpecificWebUserController
);
WebUserRouter.route("/:id").post(readSpecificWebUserController);
WebUserRouter.route("/:id").delete(
  isAuthenticated,
  isAuthorization(["superAdmin"]),
  deleteWebUserController
);
WebUserRouter.route("/:id").patch(
  isAuthenticated,
  isAuthorization(["superAdmin"]),
  updateSpecificWebUseController
);

export default WebUserRouter;
