import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoute from "./routes/movie.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/movie", movieRoute);

app.listen("3000", async () => {
  console.log("server is running");
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("connection successfully!");
  } catch (err) {
    console.log(err);
  }
});
