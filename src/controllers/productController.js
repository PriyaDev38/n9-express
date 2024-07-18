import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
  try {
    let data = await Product.create(req.body);
    res.status(200).json({
      success: true,
      message: "Products created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readProductController = async (req, res, next) => {
  try {
    let data = await Product.find({});
    res.json({
      success: true,
      message: "Product read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificProductController = async (req, res, next) => {
  try {
    let data = await Product.findById(req.params.id);
    res.json({
      success: true,
      message: "Product read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificProductIdControllerThree = async (req, res, next) => {
  try {
    let data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Product updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificProductIdDeleteControllerThree = async (
  req,
  res,
  next
) => {
  try {
    let data = await Product.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Product deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
