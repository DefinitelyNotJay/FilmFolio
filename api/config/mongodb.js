import mongoose from "mongoose";

let cachedDb = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log('=> Using existing database connection');
    return cachedDb;
  }

  console.log('=> Creating new database connection');
  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedDb = db;
  return cachedDb;
};
