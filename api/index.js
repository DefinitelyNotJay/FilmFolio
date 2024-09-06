import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import { putItem } from "./config/dynamodb.js";
import serverless from "serverless-http";
import cors from "cors";
import { connectToDatabase } from "./config/mongodb.js";
import { Comment, User } from "./model/Model.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// เชื่อมต่อกับ MongoDB นอกฟังก์ชัน handler
let isDbConnected = false;
const initializeDatabase = async () => {
  if (!isDbConnected) {
    await connectToDatabase();
    isDbConnected = true;
  }
};

app.get("/", async (req, res, next) => {
  const comments = await User.find();
  res.status(200).json(comments);
});

app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);

// Export Lambda Handler
export const handler = async (event, context) => {
  // เชื่อมต่อกับฐานข้อมูลก่อนที่จะสร้าง server
  await initializeDatabase();

  // ใช้ serverless เพื่อจัดการ Express App
  const serverlessApp = serverless(app);
  
  // ส่ง event และ context ให้ Lambda handler ของ serverless
  return serverlessApp(event, context);
};
