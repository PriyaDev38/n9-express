import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },

  studentImage: {
    type: String,
    required: [true, "studentImage field is required"],
  },
});

export default studentSchema;
