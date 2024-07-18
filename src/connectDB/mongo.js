
import mongoose from "mongoose";

const connectMongoDB =()=>{
    mongoose.connect("mongodb://localhost:27017/n9");
    console.log("connected to MongoDB Database");
};

export default connectMongoDB;

// let dbPort="mongodb://localhost:27017/n9";

// mongoose.connect("mongodb://localhost:27017/n9",()=>{
//     console.log("connected to mongoDB Database");
// });