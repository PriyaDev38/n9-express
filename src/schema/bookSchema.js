import mongoose from "mongoose";

let bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },

  authorName: {
    type: String,
    required: [true, "authorName field is required"],
  },

  edition: {
    type: Number,
    required: [true, "edition field is required"],
  },
  item: {
    type: Number,
    required: [true, "item field is required"],
  },

  price: {
    type: Number,
    required: [true, "price field is required"],
  },
});

export default bookSchema;
