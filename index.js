import express, { Router, json } from "express";
import connectMongoDB from "./src/connectDB/mongo.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import studentRouter from "./src/routes/studentRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
import traineeRouter from "./src/routes/traineeRouter.js";
import teacherRouter from "./src/routes/teacherRouter.js";
import classroomRouter from "./src/routes/classroomRouter.js";
import collegeRouter from "./src/routes/collegeRouter.js";
import departmentRouter from "./src/routes/department.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import WebUserRouter from "./src/routes/webUserRouter.js";
import cors from "cors";
import fileRouter from "./src/routes/sendfileRouter.js";

// import firstRouter from "./src/routes/firstRouter.js";
// make express application

const myApp = express();
myApp.use(express.static("./public"));
connectMongoDB();
myApp.use(json());
myApp.use(cors());
// local host:3000
// attach port to the express application

// let firstRouter = Router();
// // API =>defining  task for each request

// // localhost:3000/
// firstRouter.post("/", (req, res, next) => {
//   res.json("first post");
// })

// .get((req, res, next) => {
//   res.json("first get");
// })

// .patch((req, res, next) => {
//   res.json("first patch");
// })

// .delete((req, res, next) => {
//   res.json("first delete");
// });

// localhost:3000/user/name
myApp.use("/user", userRouter);
myApp.use("/product", productRouter);
myApp.use("/student", studentRouter);
myApp.use("/book", bookRouter);
myApp.use("/trainee", traineeRouter);
myApp.use("/teacher", teacherRouter);
myApp.use("/classroom", classroomRouter);
myApp.use("/college", collegeRouter);
myApp.use("/department", departmentRouter);
myApp.use("/review", reviewRouter);
myApp.use("/WebUser", WebUserRouter);
myApp.use("/files", fileRouter);

myApp.listen(3000, () => {
  console.log("port is running on 3000");
});

// Flow-----

// schema
// model
// controller
// routes
// index
