import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { User, Comment, Movie, Stats } from "./model/Model.js";

const app = express();
dotenv.config()
// app.use(configDotenv.apply)

app.listen("3000", () => {
  console.log("server is running");
//   console.log(process.env.MONGO_URL);
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("connection successfully!");
    User.createCollection()
    Comment.createCollection()
    Movie.createCollection()
    Stats.createCollection()
  } catch (err) {
    console.log(err);
  }
});
