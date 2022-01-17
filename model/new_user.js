import mongoose from "mongoose";

const new_userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("new_user", new_userSchema);

export default userModel;
