import { Book } from "../schema/model.js";

export const createBookController = async (req, res, next) => {
  try {
    let data = await Book.create(req.body);
    res.status(200).json({
      success: true,
      message: "Books created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const readBookController = async (req, res, next) => {
  try {
    let data = await Book.find({});
    res.json({
      success: true,
      message: "Book read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBookController = async (req, res, next) => {
  try {
    let data = await Book.findById(req.params.id);
    res.json({
      success: true,
      message: "Book read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificBookIdControllerFour = async (req, res, next) => {
  try {
    let data = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Book updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificBookIdDeleteControllerFour = async (
  req,
  res,
  next
) => {
  try {
    let data = await Book.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Book deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
