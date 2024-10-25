import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import { putItem } from "./config/dynamodb.js";
import serverless from "serverless-http";
import cors from "cors";
import { connectDB } from "./config/mongodb.js";
import { Comment, User } from "./model/Model.js";
import { MongoClient } from "mongodb";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());



app.get("/", async (req, res, next) => {
  const comments = await User.find();
  res.status(200).json(comments);
});

app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);


// await connectDB()

// Export Lambda Handler
export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  // เชื่อมต่อกับฐานข้อมูลก่อนที่จะสร้าง server
  await connectDB()

  // ใช้ serverless เพื่อจัดการ Express App
  const serverlessApp = serverless(app);
  
  // ส่ง event และ context ให้ Lambda handler ของ serverless
  return serverlessApp(event, context);
};
