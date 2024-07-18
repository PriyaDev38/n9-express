import mongoose from "mongoose";

let reviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "productId field is required"],
  },
  userId: {
    type: String,
    required: [true, "userId field is required"],
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  },
});

export default reviewSchema;
