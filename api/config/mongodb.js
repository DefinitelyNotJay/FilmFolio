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
