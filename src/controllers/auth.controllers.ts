import { Request, Response } from "express";
import User from "../models/User.model";
import jwt from "jsonwebtoken";
import { SECRET } from "../config";

export const signupHandler = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) return res.status(400).json({ message: "User already exists" });

  const newUser = new User({ firstname, lastname, email });
  newUser.password = await newUser.encryptPassword(password);
  await newUser.save();

  const token = jwt.sign({ _id: newUser._id }, SECRET);

  res.header("auth-token", token).json({ token });
};

export const signinHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(400).json({ message: "Email or password is wrong" });

  const validPassword = await user.comparePassword(password);
  console.log(validPassword)

  if (!validPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ _id: user._id }, SECRET);

  res.header("auth-token", token).json({ token });
};
