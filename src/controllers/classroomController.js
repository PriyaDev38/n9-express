import { Classroom } from "../schema/model.js";

export const createClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.create(req.body);
    res.status(200).json({
      success: true,
      message: "Classroom created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.find({});
    res.json({
      success: true,
      message: "Classroom read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificClassroomController = async (req, res, next) => {
  try {
    let data = await Classroom.findById(req.params.id);
    res.json({
      success: true,
      message: "Classroom read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificClassroomIdController = async (req, res, next) => {
  try {
    let data = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Classroom updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificClassroomIdDeleteController = async (
  req,
  res,
  next
) => {
  try {
    let data = await User.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Classroom deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
