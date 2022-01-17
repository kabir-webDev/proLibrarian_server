import mongoose from "mongoose";

const userInfo = mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  email: String,
});

const userData = new mongoose.model("user", userInfo);

export default userData;
