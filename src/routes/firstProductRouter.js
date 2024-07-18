import { Router } from "express";

let firstProductRouter = Router();
firstProductRouter
  .route("/")
  .post((req, res, next) => {
    res.json("first post");
  })
  .get((req, res, next) => {
    res.json("first get");
  })
  .patch((req, res, next) => {
    res.json("first patch");
  })
  .delete((req, res, next) => {
    res.json("first delete");
  });

export default firstProductRouter;
