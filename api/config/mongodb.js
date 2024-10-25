// import mongoose from "mongoose";

// let cachedDb = null;

// export const connectToDatabase = async () => {
//   if (cachedDb) {
//     console.log('=> Using existing database connection');
//     return cachedDb;
//   }

//   console.log('=> Creating new database connection');
//   const db = await mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   cachedDb = db;
//   return cachedDb;
// };

import mongoose from 'mongoose';

export default async function connectDB() {
	if (mongoose.connection.readyState === 0) {
		try {
			await mongoose.connect(process.env.MONGO_URL);
      console.log("db success")
		} catch (error) {
			console.error('Error connecting to MongoDB:', error);
			throw error;
		}
	}
}
