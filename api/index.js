import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import ratingRoute from "./routes/ratingRoute.js";
import serverless from "serverless-http";
import cors from "cors";
import cookieParser from 'cookie-parser';
import auth from "./routes/authRoute.js"

import mongoose from "mongoose";
import { Category, Comment, Movie, User, Rating } from "./model/Model.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))



app.get("/", async (req, res, next) => {
  const comments = await User.find();
  res.status(200).json(comments);
});

app.use("/api/auth", auth)
app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);
app.use("/api/rating", ratingRoute);



// await connectDB()
async function connectDB() {
	if (mongoose.connection.readyState === 0) {
		try {
			await mongoose.connect(process.env.MONGO_URL);
      console.log("db success")
      const movies = await Movie.find()
      console.log(movies)
      
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
			throw error;
		}
	}
}

app.listen("3000", async ()=>{
  await connectDB()
})

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
