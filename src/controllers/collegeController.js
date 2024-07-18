import { College } from "../schema/model.js";

export const createCollegeController = async (req, res, next) => {
  try {
    let data = await College.create(req.body);
    res.status(200).json({
      success: true,
      message: "College created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readCollegeController = async (req, res, next) => {
  try {
    let data = await College.find({});
    res.json({
      success: true,
      message: "College read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificCollegeController = async (req, res, next) => {
  try {
    let data = await College.findById(req.params.id);
    res.json({
      success: true,
      message: "College read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificCollegeIdController = async (req, res, next) => {
  try {
    let data = await College.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "College updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificCollegeIdDeleteController = async (req, res, next) => {
  try {
    let data = await College.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "College deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
