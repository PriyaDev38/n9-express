import mongoose, { model } from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import studentSchema from "./studentSchema.js";
import bookSchema from "./bookSchema.js";
import traineeSchema from "./traineeSchema.js";
import teacherSchema from "./teacherSchema.js";
import classroomSchema from "./classroomSchema.js";
import collegeSchema from "./collegeSchema.js";
import departmentSchema from "./departmentSchema.js";
import reviewSchema from "./reviewSchema.js";
import WebUserSchema from "./webuserSchema.js";

// variable name must be same as model name
// model name first letter always be capital
// model name must be singular

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
export const Student = mongoose.model("Student", studentSchema);
export const Book = mongoose.model("Book", bookSchema);
export const Trainee = mongoose.model("Trainee", traineeSchema);
export const Teacher = mongoose.model("Teacher", teacherSchema);
export const Classroom = mongoose.model("Classroom", classroomSchema);
export const College = mongoose.model("College", collegeSchema);
export const Department = mongoose.model("Department", departmentSchema);
export const Review = mongoose.model("Review", reviewSchema);
export const WebUser = mongoose.model("WebUser", WebUserSchema);
