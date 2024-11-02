import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import auth from "./routes/authRoute.js"
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))

app.use("/api/auth", auth)
app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);

connectDB();
connectCloudinary();

app.listen("3000", () => {
  console.log(`server start on port ${process.env.PORT}`);
});
