import { User } from "../schema/model.js";

export const createUserController = async (req, res, next) => {
  try {
    let data = await User.create(req.body);
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

export const readUserController = async (req, res, next) => {
  try {
    let data = await User.find({});
    res.json({
      success: true,
      message: "User read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificUserController = async (req, res, next) => {
  try {
    let data = await User.findById(req.params.id);
    res.json({
      success: true,
      message: "User read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificUserIdController = async (req, res, next) => {
  try {
    let data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "User updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificUserIdDeleteController = async (req, res, next) => {
  try {
    let data = await User.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "User deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
