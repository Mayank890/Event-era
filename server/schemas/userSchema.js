import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fname: String,
  lname: String,
  pnumber: String,
  profileImage: String,
});

export default mongoose.model("User", userSchema);
