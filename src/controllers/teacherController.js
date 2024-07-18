import { Teacher } from "../schema/model.js";

export const createTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.create(req.body);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.find({});
    res.json({
      success: true,
      message: "Teacher read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTeacherController = async (req, res, next) => {
  try {
    let data = await Teacher.findById(req.params.id);
    res.json({
      success: true,
      message: "Teacher read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificTeacherIdController = async (req, res, next) => {
  try {
    let data = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Teacher updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificTeacherIdDeleteController = async (req, res, next) => {
  try {
    let data = await Teacher.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Teacher deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
