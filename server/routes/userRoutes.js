import express from "express";
import jwt from "jsonwebtoken";
import User from "../schemas/userSchema.js";

const router = express.Router();
const secret_key = "hello";

router.post("/signup", async (req, res) => {
  const profile = req.body;
  const { userName, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.send("Email ID is already in use");
  } else {
    try {
      const newUser = new User(profile);
      await newUser.save();
      const token = jwt.sign({ email, userName }, secret_key);
      res.send({ message: "User Created Successfully ", token });
    } catch (err) {
      console.log(err);
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const { email, userName } = user;

    const token = jwt.sign({ email, userName }, secret_key);
    res.send({ message: "User LoggedIn Successfully ", token });
  } else {
    res.send({ message: "There does not exist the user" });
  }
});

export default router;
