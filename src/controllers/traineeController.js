import { Trainee } from "../schema/model.js";

export const createTraineeController = async (req, res, next) => {
  try {
    let data = await Trainee.create(req.body);
    res.status(200).json({
      success: true,
      message: "Trainee created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readTraineeController = async (req, res, next) => {
  try {
    let data = await Trainee.find({});
    res.json({
      success: true,
      message: "Trainee read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificTraineeController = async (req, res, next) => {
  try {
    let data = await Trainee.findById(req.params.id);
    res.json({
      success: true,
      message: "Trainee read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificTraineeIdControllerOne = async (req, res, next) => {
  try {
    let data = await Trainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Trainee updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificTraineeIdDeleteControllerOne = async (
  req,
  res,
  next
) => {
  try {
    let data = await Trainee.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Trainee deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
