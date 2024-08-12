import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import { User } from "./model/Model.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);

connectDB();
connectCloudinary();

app.listen("3000", () => {
  console.log(`server start on port ${process.env.PORT}`);
});
