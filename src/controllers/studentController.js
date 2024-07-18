import { Student } from "../schema/model.js";

export const createStudentController = async (req, res, next) => {
  try {
    let data = await Student.create(req.body);
    res.status(200).json({
      success: true,
      message: "Students created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readStudentController = async (req, res, next) => {
  try {
    let data = await Student.find({});
    res.json({
      success: true,
      message: "Student read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificStudentController = async (req, res, next) => {
  try {
    let data = await Student.findById(req.params.id);
    res.json({
      success: true,
      message: "Student read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificStudentIdControllerTwo = async (req, res, next) => {
  try {
    let data = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Student updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificStudentIdDeleteControllerTwo = async (
  req,
  res,
  next
) => {
  try {
    let data = await Student.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Student deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
