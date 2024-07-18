import { Review } from "../schema/model.js";

export const createReviewController = async (req, res, next) => {
  try {
    let data = await Review.create(req.body);
    res.status(200).json({
      success: true,
      message: "Review created successfully",
      result: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readReviewController = async (req, res, next) => {
  try {
    let data = await Review.find({});
    res.json({
      success: true,
      message: "Review read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificReviewController = async (req, res, next) => {
  try {
    let data = await Review.findById(req.params.id);
    res.json({
      success: true,
      message: "Review read successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificReviewIdController = async (req, res, next) => {
  try {
    let data = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Review updated successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
export const readSpecificReviewIdDeleteController = async (req, res, next) => {
  try {
    let data = await Review.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json({
      Success: true,
      message: "Review deleted successfully",
      result: data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
