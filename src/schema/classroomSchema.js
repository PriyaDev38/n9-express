import mongoose from "mongoose";

let classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  numberOfBench: {
    type: String,
    required: [true, "numberOfBench field is required"],
  },
  hasTv: {
    type: Number,
    required: [true, "hasTv field is required"],
  },
});

export default classroomSchema;
