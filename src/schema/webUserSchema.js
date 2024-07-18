import mongoose from "mongoose";
let WebUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required field"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required field"],
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required field"],
  },
  password: {
    type: String,
    required: [true, "password is required field"],
  },
  gender: {
    type: String,
    required: [true, "gender is required field"],
  },
  role: {
    type: String,
    required: [true, "role is required field"],
  },
  isVerifiedEmail: {
    type: Boolean,
    required: [true, "verifiedEmail is required field"],
  },
});
export default WebUserSchema;
