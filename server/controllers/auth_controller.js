import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // check if the user was existed
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
      return res.status(400).json({
        error: "User existed ! Please change your email or username .",
      });
    }
    // hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    // create and save user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    // exclude the password
    const { password: ps, ...rest } = savedUser._doc;

    return res.status(201).json(rest);
  } catch (e) {
    console.log("Error in signUp controller", e.message);
    res
      .status(500)
      .json({ error: "Internal Server Error ! Please contact us ." });
  }
};
