import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import { User } from "./model/Model.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import serverless from "serverless-http"

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next)=>{
    return res.status(200).send("Hello World")
})
app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);

await connectDB();
await connectCloudinary();

// app.listen("3000", async () => {
//   console.log(`server start on port ${process.env.PORT}`);
//   await connectDB();
//   await connectCloudinary();
// });

export const handler = serverless(app)
