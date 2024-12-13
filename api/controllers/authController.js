import { User } from "../model/Model.js";
import { comparePassword, hashPassword } from "../helper/auth.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const { username, email, password, CheckPassword } = req.body;
    console.log(req.body)

    if (!password || password.length < 6) {
      return res.send(
        "Password must be at least six characters long."
      );
    }
    if (CheckPassword != password) {
      return res.send(
        "password is not match"
      );
    }

    const user = await User.create({
        username,
        email,
        password: hash,
      });
    console.log(user)
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
 const users = await User.find()
 return res.status(200).json(users)
};