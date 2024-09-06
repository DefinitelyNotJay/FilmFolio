import express from "express";
import dotenv from "dotenv";
import movieRoute from "./routes/movieRoute.js";
import commentRoute from "./routes/commentRoute.js";
import {listDatabases} from "./config/mongodb.js"
// import connectCloudinary from "./config/cloudinary.js";
import serverless from "serverless-http"


const app = express();
// dotenv.config();

app.use(express.json());
// app.use(cors());

app.get("/", (req, res, next)=>{
    res.status(200).send(`Hello World`)
})
app.use("/api/movie", movieRoute);
app.use("/api/comment", commentRoute);

// await connectCloudinary();

// app.listen("3000", async () => {
//   console.log(`server start on port ${process.env.PORT}`);
//   await connectDB();
//   await connectCloudinary();
// });


let conn = null;

const connectDB = async function() {
  if (conn == null) {
    conn = mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000
    }).then(() => mongoose);

    await conn;
  }

  return conn;
};

await connectDB()


export const handler = serverless(app)
