import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  mobileNumber: String,
});

export default mongoose.model("User", userSchema);
