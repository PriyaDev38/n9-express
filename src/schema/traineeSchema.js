import mongoose from "mongoose";

let traineeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  class: {
    type: Number,
    required: [true, "class field is required"],
  },
  faculty: {
    type: String,
    required: [true, "faculty field is required"],
  },
});

export default traineeSchema;
